# cordova-signal-level
WIFI or GSM signal connect Level

Installing the plugin
The plugin confirms to the Cordova plugin specification, it can be installed using the Cordova / Phonegap command line interface.

    phonegap plugin add https://github.com/vindozo/cordova-signal-level.git

    cordova plugin add https://github.com/vindozo/cordova-signal-level.git
    
    <plugin name="cordova-signal-level" spec="https://github.com/vindozo/cordova-signal-level.git" />
    
Using the plugin
The plugin creates the object androidconnectivity with the method getJsonResult(success, fail).

Example - Get Android Connectivity Details as Json:

    SignalLevel.get(
    function(resp){
        console.log(resp);
    },
    function(err){
        alert("Error: "+(err));
    });

return:
    {
	isConnectedWifi: false,
	isConnectedMobile: true,
			WifiSignalLevel: 0,
			MobileSignalLevel: 2,
	ConnectedFast: "4G"
     }
