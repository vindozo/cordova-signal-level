module.exports = {
    get: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "SignalLevel", "getjsonresult", []);
    }
};
