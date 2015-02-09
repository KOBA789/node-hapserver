var storage = require('node-persist');
storage.initSync();

var hapserver = require('./');

var Accessory = hapserver.Accessory,
    AccessoryController = hapserver.AccessoryController,
    Service = hapserver.Service,
    Characteristic = hapserver.Characteristic,
    constants = hapserver.constants;

var accessoryObj = {
  displayName: "Light 1",
  username: "1A:2B:3C:4D:5E:FF",
  pincode: "031-45-154",
  services: [{
    type: constants.ACCESSORY_INFORMATION_STYPE, 
    characteristics: [{
    	type: constants.NAME_CTYPE, 
    	onUpdate: null,
    	perms: ["pr"],
		  format: "string",
		  initialValue: "Light 1",
		  supportEvents: false,
		  supportBonjour: false,
		  manfDescription: "Bla",
		  designedMaxLength: 255    
    },{
    	type: constants.MANUFACTURER_CTYPE, 
    	onUpdate: null,
    	perms: ["pr"],
		  format: "string",
		  initialValue: "Oltica",
		  supportEvents: false,
		  supportBonjour: false,
		  manfDescription: "Bla",
		  designedMaxLength: 255    
    },{
    	type: constants.MODEL_CTYPE,
    	onUpdate: null,
    	perms: ["pr"],
		  format: "string",
		  initialValue: "Rev-1",
		  supportEvents: false,
		  supportBonjour: false,
		  manfDescription: "Bla",
		  designedMaxLength: 255    
    },{
    	type: constants.SERIAL_NUMBER_CTYPE, 
    	onUpdate: null,
    	perms: ["pr"],
		  format: "string",
		  initialValue: "A1S2NASF88EW",
		  supportEvents: false,
		  supportBonjour: false,
		  manfDescription: "Bla",
		  designedMaxLength: 255    
    },{
    	type: constants.IDENTIFY_CTYPE, 
    	onUpdate: null,
    	perms: ["pw"],
		  format: "bool",
		  initialValue: false,
		  supportEvents: false,
		  supportBonjour: false,
		  manfDescription: "Identify Accessory",
		  designedMaxLength: 1    
    }]
  },{
    type: constants.LIGHTBULB_STYPE, 
    characteristics: [{
    	type: constants.NAME_CTYPE,
    	onUpdate: null,
    	perms: ["pr"],
		  format: "string",
		  initialValue: "Light 1",
		  supportEvents: false,
		  supportBonjour: false,
		  manfDescription: "Bla",
		  designedMaxLength: 255   
    },{
    	type: constants.POWER_STATE_CTYPE,
    	onUpdate: function(value) {
        console.log(value);
      },
    	perms: ["pw","pr","ev"],
		  format: "bool",
		  initialValue: false,
		  supportEvents: false,
		  supportBonjour: false,
		  manfDescription: "Turn On the Light",
		  designedMaxLength: 1    
    }]
  }]
};

var accessoryCtrl = new AccessoryController();

accessoryObj.services.forEach(function (serviceObj) {
  var service = new Service(serviceObj.type);
  serviceObj.characteristics.forEach(function (charObj) {
    var char = new Characteristic(charObj, charObj.onUpdate);
    service.addCharacteristic(char);
  });
  accessoryCtrl.addService(service);
});

var accessory = new Accessory(accessoryObj.displayName, accessoryObj.username,
                              storage, 51826,
                              accessoryObj.pincode, accessoryCtrl);
accessory.publishAccessory();
