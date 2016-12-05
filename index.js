var querystring = require('querystring');
var https = require('https');

var gcmRegKey = undefined;
var fcmRegKey = undefined;

PushNotificationClient = function () {};

var method = PushNotificationClient.prototype;

method.withGCMKey = function(key) {
    gcmRegKey = key;
}

method.withFCMKey = function(key) {
    fcmRegKey = key;
}

method.sendGCMNotification = function(userToken, payload, callback, action) {
    if(!gcmRegKey){
        return callback('GCM key is not set!');
    } 
    var data = {};
    data['action'] = action;
    data['payload'] = payload;

    var request = {};
    request['to'] = userToken;
    request['data'] = data;

    var dataString = JSON.stringify(request);
    pushToAndroid('gcm-http.googleapis.com', '/gcm/send', gcmRegKey, dataString, callback);
}

method.sendFCMNotfication = function(userToken, payload, callback, action) {
    if(!fcmRegKey){
        return callback('FCM key is not set!');
    } 
    var data = {};
    data['action'] = action;
    data['payload'] = payload;

    var request = {};
    request['to'] = userToken;
    request['data'] = data;

    var dataString = JSON.stringify(request);
    pushToAndroid('fcm.googleapis.com', '/fcm/send', fcmRegKey, dataString, callback);
}

function pushToAndroid(endPoint, rPath, key, data, callback){
    var headers = {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization' : 'key=' + key
        };
    var options = {
        host: endPoint,
        path: rPath,
        method: 'POST',
        headers: headers
    };

    var req = https.request(options, function(res) {
        res.setEncoding('utf-8');

        var response = '';
        res.on('data', function(data) {
            response += data;
        });

        res.on('end', function() {
            var responseObject = JSON.parse(response);
            callback(responseObject);
        });
    });
    req.write(data);
    req.end();
}

exports.Client = PushNotificationClient;