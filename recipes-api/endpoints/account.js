'use strict';

let DynamoDb = require('../utils/dynamo-db-utils');

module.exports = (() => {
  async function login(event) {
    let request = JSON.parse(event.body);
    let account = await DynamoDb.getAccount(request.email);
    if (account && account.password === request.password) {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200,
        body: JSON.stringify({
          id: account.email
        })
      }
    }
    else {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200,
        body: JSON.stringify({
          error: 'Email or Password incorrect'
        })
      };
    }
  }

  return {
    login
  };
})();