// create a express server on port 3000

const express = require('express');
const app = express();

// create a server on port 3000
app.listen(3000, function () {
  console.log('listening on port 3000');
});

// create a route to redirect to the index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// create a route to redirect to the index.html file
app.get('/employess', function (req, res) {
    res.send({
        'name':'keerthana'
    });
});

// create a route to redirect to the index.html file
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});