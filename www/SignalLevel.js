module.exports = {
    getjsonresult: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "SignalLevel", "getjsonresult", []);
    },
    
    get: function (successCallback, errorCallback) {
        SignalLevel.successCallback = successCallback;
        SignalLevel.errorCallback = errorCallback;
        SignalLevel.getjsonresult(function(resp){
           resp = JSON.parse(resp);
           SignalLevel.successCallback( {
               isConnectedWifi: !!JSON.parse(String(resp.isConnectedWifi).toLowerCase()), 
               isConnectedMobile: !!JSON.parse(String(resp.isConnectedMobile).toLowerCase()), 
               WifiSignalLevel: (resp.WifiSignalLevel-0), 
               MobileSignalLevel: (resp.MobileSignalLevel-0), 
               ConnectedFast: resp.ConnectedFast 
           });
        }, function(err){
            SignalLevel.errorCallback(err);
        });
    }
};
