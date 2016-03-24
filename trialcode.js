/* ----------------------  Needed modules ----------------------- */
var record = require('./node_modules/node-record-lpcm16/index.js'),
    fs = require('fs'),
    speech = require("./speech.js"),
     port   = require('./sp.js');

/* ----------------------  Needed variables ----------------------- */
var clientId = 't2s',                             // Can be anything
    clientSecret = 'dd7c09c4cd894ce69b3817bdfcd21162', // API key from Azure marketplace
    file = fs.createWriteStream('test.wav', { encoding: 'binary' }); 

/* ----------------------  Where The Magic Happens ----------------------- */

record.start();
setTimeout(function () {
    console.log("recording stopped")
    record.stop().pipe(file);
    SpeechFun('test.wav');
}, 4000); 


/* ----------------------  Needed Functions ----------------------- */

var SpeechFun = function (fName) {
    speech.getAccessToken(clientId, clientSecret, function (err, accessToken) {
        if (err) return console.log(err);

        speech.speechToText(fName, accessToken, function (err, res) {
            if (err) return console.log(err);

            Analysis(res.results[0].lexical);
        });
    });
}


var Analysis = function (x) {

    var n = x.search('elsa'),
        m = x.search('frozen'),
        o = x.search('sing');

    if (n != -1 || m != -1 || o != -1) 
        // sp.Start();
        console.log("serial port starting");
    else
        console.log("no keywords found");

}



