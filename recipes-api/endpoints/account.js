'use strict';

let DynamoDb = require('../utils/dynamo-db-utils');

module.exports = (() => {
  async function login(event) {
    let request = JSON.parse(event.body);
    console.log('Request:', request);
    let account = await DynamoDb.getAccount(request.email);
    console.log('Account:', account);
    if (account && account.password === request.password) {
      console.log('Success');
      return {
        statusCode: 200,
        body: JSON.stringify({
          id: account.email
        })
      }
    }
    else {
      console.log('Error');
      return {
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