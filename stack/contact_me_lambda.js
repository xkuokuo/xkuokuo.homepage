var AWS = require('aws-sdk');

const createResponse = (statusCode, body) => {
  // to restrict the origin for CORS purposes, replace the wildcard
  // origin with a specific domain name
  return {
    statusCode: statusCode,
    body: body,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }
};

exports.handler = function(event, context, callback) {
  // extract message from event
  var body = JSON.parse(event.body);
  var email = body.email;
  var rawMessage = body.message;
  var name = body.name;
  var topicARN = process.env.TOPIC_ARN;

  var message = "From: " + name + "\nEmail: " + email + "\n" + rawMessage;

  var sns = new AWS.SNS();

  var snsPublishParams = {
    Message: message,
    Subject: "New Visitor Message From Your Homepage!",
    TopicArn: topicARN
  }

  sns.publish(snsPublishParams, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });

  callback(null,createResponse(200, JSON.stringify({"status": "success"})))
}
