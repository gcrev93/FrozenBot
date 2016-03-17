var record = require('./node_modules/node-record-lpcm16/index.js'),
    fs     = require('fs');
    
var file = fs.createWriteStream('test.wav', { encoding: 'binary' });
var speech = require("./speech.js");
var accessToken;

record.start();    
    
setTimeout(function () {
  console.log("recording stopped")
  record.stop().pipe(file);
  speech.speechFun('test.wav');
}, 10000); 



  

