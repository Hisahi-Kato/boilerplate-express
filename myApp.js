var express = require('express');
var app = express();

console.log('Hello World');

app.get('/', (req, res) => {
  // res.send('Response String')
  const absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})
































module.exports = app;
