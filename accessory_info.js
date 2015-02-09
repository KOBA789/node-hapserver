var crypto = require("crypto");
var ed25519 = require("ed25519");

AccessoryInfo.prototype = {
	setKeyPair: function setKeyPair(keys) {
		this.keyPair = keys;
	}
};

function AccessoryInfo(displayName,username, pincode) {
	this.displayName = displayName;
	this.username = username;
	this.pincode = pincode;

	var seed = crypto.randomBytes(32);
	var keyPair = ed25519.MakeKeypair(seed);
	this.keyPair = {
		signSk: keyPair.privateKey,
		signPk: keyPair.publicKey
	};
}

module.exports = AccessoryInfo;
