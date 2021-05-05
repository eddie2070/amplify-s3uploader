console.log('Loading function');

const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

var params = {
  Destination: { /* required */
    ToAddresses: [
      'eddie2070@gmail.com',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Stanley Internal Uploader'
     }
    },
  Source: 'kedouard+MB1@amazon.com', /* required */
  ReplyToAddresses: [
     'kedouard+MB1@amazon.com',
    /* more items */
  ],
};

const signedUrlExpireSeconds = 60 * 60 * 24 * 7


async function sending(objectuploded,presig,destemail){
    //params.Destination.ToAddresses[0]="eddie2070@gmail.com";
    params.Destination.ToAddresses[0]=destemail;
    params.Message.Body.Html.Data="Thank you for using the account team S3 Uploader. <br> <br>The last object uploaded " + objectuploded + " can be shared with the following URL (valid for "+ signedUrlExpireSeconds / 60 / 60 /24 +" days) :<br> <a href=\""+presig+"\">"+presig+"</a>";
    //var sendPromise = new aws.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    console.log("params edited :",params);
    var sendPromise = await new aws.SES({apiVersion: '2010-12-01'}).sendEmail(params);
    return sendPromise.promise();
}

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    };
    
    const url = s3.getSignedUrl('getObject', {
        Bucket: bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
    });
    
    console.log('url: ', url);
    
    try {
        const { Metadata } = await s3.getObject(params).promise();
        console.log('CONTENT TYPE:', Metadata.author);
        //sendPromise.then(
        var top = await sending(key, url.toString(),Metadata.author);
        console.log(top);
        //sending(Metadata.author);
        //return Metadata.author;
        //const { ContentType } = await s3.getObject(params).promise();
        //console.log('CONTENT TYPE:', ContentType);
        //return ContentType;
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
