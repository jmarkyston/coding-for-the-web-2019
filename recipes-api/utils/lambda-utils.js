module.exports = (() => {
  function respond(body) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: 200,
      body: JSON.stringify(body)
    };
  }

  return {
    respond
  };
})();