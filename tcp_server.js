var net = require('net');
var encryption = require("./encryption");
var HAPSession = require("./hap_session");

function TCPServer(servicePort, hapPort, persistStore, accessoryInfo) {
	this.servicePort = servicePort;
	this.persistStore = persistStore;
  this.accessoryInfo = accessoryInfo;
	this.hapPort = hapPort;
	this.server = this.createServer(this.servicePort, this.hapPort);
	this.sessions = {};
	this.portMap = {};
}

TCPServer.prototype = {
	createServer: function createServer(servicePort, hapPort) {
		var server = net.createServer(function (socket) {
			if(this.sessions[socket.remotePort] === undefined) {
				this.sessions[socket.remotePort] = new HAPSession(this, socket, this.hapPort, this.persistStore, this.accessoryInfo, function(remotePort, localPort) {
					this.portMap[localPort] = this.sessions[remotePort];
				}.bind(this));
			}
		}.bind(this));

		return server;
	},
	startServer: function startServer() {
		this.server.listen(this.servicePort);
		console.log("TCP server accepting connection on port: " + this.servicePort);
	},
	enableEncryptionForSession: function enableEncryptionForSession(connectPort, sharedSec) {
		this.portMap[connectPort].enableEncryptionForSession(sharedSec);
	},
	removeSession: function removeSession(connectPort) {
		delete this.portMap['connectPort'];
	},
	retrieveSession: function retrieveSession(connectPort) {
		return this.portMap[connectPort];
	},
	broadcastEvent: function broadcastEvent(data, subscribedPeers, peer) {
		var contentData = Buffer(data);
		var newLine_Buffer = Buffer("0D0A","hex");
		var headerData = Buffer("EVENT/1.0 200 OK");
		var contentType = Buffer("Content-Type: application/hap+json");
		var contentLength = Buffer("Content-Length: ");
		var contentLength_Buffer = Buffer(contentData.length.toString());
		var finalizedData = Buffer.concat([headerData,newLine_Buffer,contentType,newLine_Buffer,contentLength,contentLength_Buffer,newLine_Buffer,newLine_Buffer,contentData]);
		for(var key in subscribedPeers) {
			if (subscribedPeers[key] && (key != peer)) {
				var session = this.portMap[key];
				session.sendHAPEvent(finalizedData);
			}
		}
	}
}

module.exports = TCPServer;
