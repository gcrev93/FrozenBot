
var serialPort = require("serialport"),
    SerialPort = require("serialport").SerialPort;



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

    stdin.on('data', function(data) {
        callback(data.toString().trim());
    });
}

exports.Start = function (number) {
    console.log("Starting up serial host...\n");
     sp.on('data', function(input) {
            console.log("in the on function");
            console.log(input);
            sp.write(number, function(){
                sp.close()});
        },
        prompt('', function (input) {
           //sp.close();
}));
    
  
}
