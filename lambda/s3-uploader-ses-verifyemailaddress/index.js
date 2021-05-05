// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region 
AWS.config.update({region: 'us-east-1'});


// Create listIdentities params 
 var params = {
  IdentityType: "EmailAddress", 
  MaxItems: 123, 
  NextToken: ""
 };



exports.handler = async (event, context, callback) => {
    console.log("event: ", event);
    var emailtoverify = event.request.userAttributes.email
    console.log ("Email to verify= ", emailtoverify);
    
    // Create the promise and SES service object
    var listIDsPromise = new AWS.SES().listIdentities(params).promise();
    
    
    listIDsPromise.then(
        function(data) {
            console.log(data.Identities);
            if (data.Identities.includes(emailtoverify) == true) {
                console.log("email already verified");
                //callback(null, event);
                return "exit lambda";
            } else {
                var verifyEmailPromise = new AWS.SES({apiVersion: '2010-12-01'}).verifyEmailIdentity({EmailAddress: emailtoverify}).promise();
                verifyEmailPromise.then(
                    function(data) {
                        console.log("Email verification initiated");
                        }).catch(
                            function(err) {
                                console.error(err, err.stack);
                                
                            });
            }
            
        }).catch(
            function(err) {
                console.error(err, err.stack);
            });
            
    // Create promise and SES service object
    
            
    
            
    console.log ("Authentication successful");
    console.log ("Trigger function =", event.triggerSource);
    console.log ("User pool = ", event.userPoolId);
    console.log ("App client ID = ", event.callerContext.clientId);
    console.log ("User ID = ", event.userName);

    // Return to Amazon Cognito
    callback(null, event);
};
