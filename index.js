/*var record = require('./node_modules/node-record-lpcm16/index.js'),
    fs     = require('fs');
    
var file = fs.createWriteStream('test.wav', { encoding: 'binary' });
var speech = require("./speech.js");
var accessToken;


record.start();

 
// Stop recording after three seconds and write to file 
setTimeout(function () {
  console.log("recording stopped")
  record.stop().pipe(file);
  speech.speechFun('test.wav');
}, 10000); 

/*

var rec       = require('node-record-lpcm16'),
    request   = require('request');
 
var witToken = '5TDUO6B57WKZX7AODI6SSW3Q4KKYZKTE'; // get one from wit.ai! 
 
exports.parseResult = function (err, resp, body) {
  console.log(body);
};
 
rec.start().pipe(request.post({
  'url'     : 'https://api.wit.ai/speech?client=chromium&lang=en-us&output=json',
  'headers' : {
    'Accept'        : 'application/vnd.wit.20160202+json',
    'Authorization' : 'Bearer ' + witToken,
    'Content-Type'  : 'audio/wav'
  }
}, exports.parseResult));
  

*/
var serialPort = require("serialport"),
    SerialPort = require("serialport").SerialPort;

var x = Math.floor((Math.random() * 3) + 1);

var sp = new SerialPort("/dev/tty.usbmodem1411", {
      baudrate: 115200,
      dataBits: 8,
      parity: 'none',
      stopBits: 1,
      flowControl: false,
      parser: serialPort.parsers.readline("\r\n")
});

function prompt(message, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(message);

    stdin.on('data', function (data) {
        callback(data.toString().trim());
    });
}

console.log("Starting up serial host...\n");


sp.on('data', function(input) {  
    console.log(input);
    sp.write(x);
    sp.close();
    
    
},
prompt('', function (input) {
    sp.write(input);
    
})

);


