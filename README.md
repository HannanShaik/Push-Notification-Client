# Push-Notification-Client
Push Notification Client for GCM &amp; FCM in NodeJs.

Latest Stable Version : *1.0.4*

## Usage

Install the node module from NPM

```
npm install push-notification-client --save
```

Then, in your node file

```
var PNClient = require('push-notification-client').Client;

var userToken = "<<< User Token generated in client >>>";
var data = "<<< json payload for notification >>>";

var pnClient = new PNClient();
pnClient.withGCMKey('<<<Your GCM Key>>>');

pnClient.sendGCMNotification(userToken, data, function(response){
	if(response.success){
        console.log('Successfully sent notification.');
    } else {
        console.error('Failed to send notification.');
    }
});

```

### For FCM:

```
var pnClient = new PNClient();
pnClient.withFCMKey('<<<Your FCM Key>>>');

pnClient.sendFCMNotification(userToken, data, function(response){
	if(response.success){
        console.log('Successfully sent notification.');
    } else {
        console.error('Failed to send notification.');
    }
});
```

For any queries, write to me@hannanshaik.com
