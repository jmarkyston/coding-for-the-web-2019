let AWS = require('aws-sdk');

module.exports = (() => {
  var client = new AWS.DynamoDB.DocumentClient();

  function getAccount(email) {
    return new Promise((resolve) => {
      client.get({
        TableName: 'recipe-accounts',
        Key: {
          email: email
        }
      }, (err, data) => {
        if (err) {
          console.log(`getAccount failed:`, err);
        }
        resolve(data ? data.Item : null);
      });
    });
  }

  return {
    getAccount
  }
})();