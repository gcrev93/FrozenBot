// example code from record npm site



/*
var record = require('./node_modules/node-record-lpcm16/index.js'),
    fs     = require('fs');
 
var file = fs.createWriteStream('test.wav', { encoding: 'binary' });
 

record.start();

 
// Stop recording after three seconds and write to file 
setTimeout(function () {
  console.log("recording stopped")
  record.stop().pipe(file);
  
  
}, 10000);
/*
var speech = require("./speech.js");

  speech.getAccessToken(speech.clientId, 'dd7c09c4cd894ce69b3817bdfcd21162', function(err, accessToken) {
  if(err) return console.log(err);
  //console.log('Got access token: ' + accessToken)
  
    speech.speechToText('test.wav', accessToken, function(err, res) {
      if(err) return console.log(err);
      console.log('Confidence ' + res.results[0].confidence + ' for: "' + res.results[0].lexical + '"');
    });
    
  });*/
  