"use strict";
var express = require('express');
var fs = require('fs');

module.exports = (PORT) => {
  const apiServer = express();

  apiServer.get('/api/hello', function (req, res) {
    res.send(JSON.stringify({
        "hello": "world",
        "data": [
          { "name": "hello" },
          { "name": "world" }
        ]
    }));
  });

  apiServer.listen(PORT, 'localhost');
}
