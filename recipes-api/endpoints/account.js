'use strict';

let DynamoDb = require('../utils/dynamo-db-utils');
let Lambda = require('../utils/lambda-utils');

module.exports = (() => {
  async function login(event) {
    let request = JSON.parse(event.body);
    let account = await DynamoDb.getAccount(request.email);
    if (account && account.password === request.password) {
      return Lambda.respond({
        email: account.email,
        favorites: account.favorites || []
      });
    }
    else {
      return Lambda.respond({
        error: 'Email or Password incorrect'
      });
    }
  }

  async function favorite(event) {
    let request = JSON.parse(event.body);
    let account = await DynamoDb.getAccount(request.email);
    account.favorites = account.favorites || [];
    if (!account.favorites.find(f => f.uri === request.recipe.uri)) {
      account.favorites.push(request.recipe);
      await DynamoDb.putAccount(account);
    }
    return Lambda.respond({});
  }

  async function unfavorite(event) {
    let request = JSON.parse(event.body);
    let account = await DynamoDb.getAccount(request.email);
    let index = account.favorites.findIndex(f => f.uri === request.recipe.uri);
    if (account.favorites && index > -1) {
      account.favorites.splice(index, 1);
      await DynamoDb.putAccount(account);
    }
    return Lambda.respond({});
  }

  return {
    login,
    favorite,
    unfavorite
  };
})();