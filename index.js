/* ----------------------  Needed modules ----------------------- */
var record = require('./node_modules/node-record-lpcm16/index.js'),
    fs = require('fs'),
    speech = require("./speech.js");
     

/* ----------------------  Needed variables ----------------------- */
var clientId = 't2s',                             // Can be anything
    clientSecret = '<insert clientSecret from Project Oxford>', // API key from Azure marketplace
    file = fs.createWriteStream('test.wav', { encoding: 'binary' });
    number = Math.floor((Math.random() * 5) + 1).toString();

/* ----------------------  Where The Magic Happens ----------------------- */

record.start();
setTimeout(function () {
    console.log("recording stopped")
    record.stop().pipe(file);
    SpeechFun('test.wav');
}, 4000); 


/* ----------------------  Needed Functions ----------------------- */

function SpeechFun (fName) {
    speech.getAccessToken(clientId, clientSecret, function (err, accessToken) {
        if (err) return console.log(err);

        speech.speechToText(fName, accessToken, function (err, res) {
            if (err) return console.log(err);

            Analysis(res.results[0].lexical);
        });
    });
}


function Analysis (x) {
    port   = require('./sp.js');
    var n = x.search('elsa'),
        m = x.search('frozen'),
        o = x.search('sing');

    if (n != -1 || m != -1 || o != -1)
    { 
        port.Start(number);   
    }
        
    else
        console.log("no keywords found");

}



