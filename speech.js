//This script is an edited version of a script written by another user on github(lukehoban). The site for this code is: https://gist.github.com/lukehoban/0ee5c1bef438dc5bd7cb
var fs = require('fs');
var util = require('util');
var request = require('request');

// ==== Get Project Oxford Access Token and Use Project Oxford Speech To Text API ====

exports.getAccessToken = function(clientId, clientSecret, callback) {
  request.post({
    url: 'https://oxford-speech.cloudapp.net/token/issueToken',
    form: {
      'grant_type': 'client_credentials',
      'client_id': encodeURIComponent(clientId),
      'client_secret': encodeURIComponent(clientSecret),
      'scope': 'https://speech.platform.bing.com'
    }
  }, function(err, resp, body) {
    if(err) return callback(err);
    try {
      var accessToken = JSON.parse(body).access_token;
      if(accessToken) {
        callback(null, accessToken);
      } else {
        callback(body);
      }
    } catch(e) {
      callback(e);
    }
  });
}

exports.textToSpeech = function(text, filename, accessToken, callback) {
  var ssmlTemplate = "<speak version='1.0' xml:lang='en-us'><voice xml:lang='%s' xml:gender='%s' name='%s'>%s</voice></speak>";
  request.post({
    url: 'http://speech.platform.bing.com/synthesize',
    body: util.format(ssmlTemplate, 'en-US', 'Female', 'Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)', text),
    encoding: null,
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type' : 'application/ssml+xml',
      'X-Microsoft-OutputFormat' : 'riff-16khz-16bit-mono-pcm',
      'User-Agent' : 'TTSWithNode',
      'X-Search-AppId': '07D3234E49CE426DAA29772419F436CA',
      'X-Search-ClientID': '1ECFAE91408841A480F00935DC390960',
    }
  }, function(err, resp, body) {
    if(err) return callback(err);
  //  console.log('this is it: ' + body);
    fs.writeFile(filename, body, 'binary', function (err) {
      if (err) return callback(err);
      callback(null);
    });
  });
}
exports.speechToText = function (filename, accessToken, callback) {
  fs.readFile(filename, function(err, waveData) {
    if(err) return callback(err);
    request.post({
      url: 'https://speech.platform.bing.com/recognize/query',
      qs: {
        'scenarios': 'ulm',
        'appid': 'D4D52672-91D7-4C74-8AD8-42B1D98141A5', // This magic value is required
        'locale': 'en-US',
        'device.os': 'wp7',
        'version': '3.0',
        'format': 'json',
        'requestid': '1d4b6030-9099-11e0-91e4-0800200c9a66', // can be anything
        'instanceid': '1d4b6030-9099-11e0-91e4-0800200c9a66' // can be anything
      },
      body: waveData,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'audio/wav; samplerate=16000',
        'Content-Length' : waveData.length
      }
    }, function(err, resp, body) {
      if(err) return callback(err);
      try {
        callback(null, JSON.parse(body));
      } catch(e) {
        callback(e);
      }
    });
  });
}




