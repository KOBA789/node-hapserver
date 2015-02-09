//HomeKit Types UUID's

var stPre = "000000";
var stPost = "-0000-1000-8000-0026BB765291";

module.exports = {
  //HomeKitServiceTypes
  LIGHTBULB_STYPE: stPre + "43" + stPost,
  SWITCH_STYPE: stPre + "49" + stPost,
  THERMOSTAT_STYPE: stPre + "4A" + stPost,
  GARAGE_DOOR_OPENER_STYPE: stPre + "41" + stPost,
  ACCESSORY_INFORMATION_STYPE: stPre + "3E" + stPost,
  FAN_STYPE: stPre + "40" + stPost,
  OUTLET_STYPE: stPre + "47" + stPost,
  LOCK_MECHANISM_STYPE: stPre + "45" + stPost,
  LOCK_MANAGEMENT_STYPE: stPre + "44" + stPost,

  //HomeKitCharacteristicsTypes
  ADMIN_ONLY_ACCESS_CTYPE: stPre + "01" + stPost,
  AUDIO_FEEDBACK_CTYPE: stPre + "05" + stPost,
  BRIGHTNESS_CTYPE: stPre + "08" + stPost,
  COOLING_THRESHOLD_CTYPE: stPre + "0D" + stPost,
  CURRENT_DOOR_STATE_CTYPE: stPre + "0E" + stPost,
  CURRENT_LOCK_MECHANISM_STATE_CTYPE: stPre + "1D" + stPost,
  CURRENT_RELATIVE_HUMIDITY_CTYPE: stPre + "10" + stPost,
  CURRENT_TEMPERATURE_CTYPE: stPre + "11" + stPost,
  HEATING_THRESHOLD_CTYPE: stPre + "12" + stPost,
  HUE_CTYPE: stPre + "13" + stPost,
  IDENTIFY_CTYPE: stPre + "14" + stPost,
  LOCK_MANAGEMENT_AUTO_SECURE_TIMEOUT_CTYPE: stPre + "1A" + stPost,
  LOCK_MANAGEMENT_CONTROL_POINT_CTYPE: stPre + "19" + stPost,
  LOCK_MECHANISM_LAST_KNOWN_ACTION_CTYPE: stPre + "1C" + stPost,
  LOGS_CTYPE: stPre + "1F" + stPost,
  MANUFACTURER_CTYPE: stPre + "20" + stPost,
  MODEL_CTYPE: stPre + "21" + stPost,
  MOTION_DETECTED_CTYPE: stPre + "22" + stPost,
  NAME_CTYPE: stPre + "23" + stPost,
  OBSTRUCTION_DETECTED_CTYPE: stPre + "24" + stPost,
  OUTLET_IN_USE_CTYPE: stPre + "26" + stPost,
  POWER_STATE_CTYPE: stPre + "25" + stPost,
  ROTATION_DIRECTION_CTYPE: stPre + "28" + stPost,
  ROTATION_SPEED_CTYPE: stPre + "29" + stPost,
  SATURATION_CTYPE: stPre + "2F" + stPost,
  SERIAL_NUMBER_CTYPE: stPre + "30" + stPost,
  TARGET_DOORSTATE_CTYPE: stPre + "32" + stPost,
  TARGET_LOCK_MECHANISM_STATE_CTYPE: stPre + "1E" + stPost,
  TARGET_RELATIVE_HUMIDITY_CTYPE: stPre + "34" + stPost,
  TARGET_TEMPERATURE_CTYPE: stPre + "35" + stPost,
  TEMPERATURE_UNITS_CTYPE: stPre + "36" + stPost,
  VERSION_CTYPE: stPre + "37" + stPost,
  CURRENTHEATINGCOOLING_CTYPE: stPre + "0F" + stPost,
  TARGETHEATINGCOOLING_CTYPE: stPre + "33" + stPost
};
