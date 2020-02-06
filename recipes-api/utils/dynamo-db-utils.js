let AWS = require('aws-sdk');

module.exports = (() => {
  const TABLE = 'recipe-accounts';

  var client = new AWS.DynamoDB.DocumentClient();

  function getAccount(email) {
    return new Promise((resolve) => {
      client.get({
        TableName: TABLE,
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

  function putAccount(account) {
    return new Promise((resolve) => {
      client.put({
        TableName: TABLE,
        Item: account
      }, (err, data) => {
        if (err) {
          console.log(`putAccount failed:`, err);
        }
        resolve();
      });
    });
  }

  return {
    getAccount,
    putAccount
  }
})();