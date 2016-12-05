var PNClient = require('./index').Client;

var token = 'cksSOyTrN4A:APA91bEq2VEbDqCKvbzG85E8YQQ0tBjAPsaVRC8-9vtSLGTo14sBy4_aDRBq3-gFdH8bnAKmDrClVtlW9Rh6THxnkJHNtU8Gs9CL8gjURbg_KlbnzQIp68DPiGA9XpmmoxbsUu_I_ktx';
var data = new Object();
data.message = 'hi';
data.type = 'RESPONSE';

pnClient = new PNClient();
pnClient.withGCMKey('AIzaSyA90U3kmuQ4pIELRTjKAAz37fyNGpIJ93Y');
pnClient.sendGCMNotification(token, data, function(response){
	if(response.success){
        console.log('Test Passed!');
    } else {
        console.error('Test Failed!');
    }
});