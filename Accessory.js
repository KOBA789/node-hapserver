var AccessoryInfo = require("./accessory_info");
var Advertiser = require("./advertiser");
var HAPServer = require("./hap_server");
var TCPServer = require("./tcp_server");
var crypto = require("crypto");
var ed25519 = require("ed25519");

Accessory.prototype = {
	publishAccessory: function publishAccessory() {
		if (this._private.advertiser !== undefined) {
			this._private.advertiser.startAdvertising();
		}
		if (this._private.tcpServer !== undefined) {
			this._private.tcpServer.startServer();
		}
		if (this._private.hapServer !== undefined) {
			this._private.hapServer.tcpServer = this._private.tcpServer;
			this._private.hapServer.startHAPServer(this.targetPort + 1);
		}
	}
};

function Accessory(displayName, username, persistStore, targetPort, pincode, accessoryController) {
	this.displayName = displayName;
	this.username = username;
	this.targetPort = targetPort;
	this.accessoryController = accessoryController;
	this.accessoryInfo = new AccessoryInfo(this.displayName,this.username, pincode);
	var savedKey = persistStore.getItem(username);
    if (savedKey !== undefined) {
		var keyPair = savedKey;
		this.accessoryInfo.setKeyPair(keyPair);
	} else {
		console.log("Cannot find secret key, creating One...");
		persistStore.setItem(username, this.accessoryInfo.keyPair);
		persistStore.persistSync();
	}
	this._private = {
		store: persistStore,
		advertiser: new Advertiser(targetPort, this.displayName,this.username,"1","1"),
		tcpServer: new TCPServer(targetPort, targetPort+1, persistStore, this.accessoryInfo),
		hapServer: new HAPServer(this.accessoryInfo, function (connectPort, sharedSec){
			this._private.tcpServer.enableEncryptionForSession(connectPort, sharedSec);
		}.bind(this), persistStore, accessoryController)
	};
	this.accessoryController.tcpServer = this._private.tcpServer;
}

module.exports = Accessory;
