var record = require('./node_modules/node-record-lpcm16/index.js'),
    fs     = require('fs'),
    async  = require('async'),
    speech = require("./speech.js"),
    port   = require('./sp.js');
    
var file = fs.createWriteStream('test.wav', { encoding: 'binary' }); 
var word;

record.start();    
    
setTimeout(function () {
  console.log("recording stopped")
  record.stop().pipe(file);
  speech.speechFun('test.wav');
}, 4000); 




