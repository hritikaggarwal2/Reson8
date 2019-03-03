'use strict';
var connectionString = 'HostName=Resonate.azure-devices.net;DeviceId=Myo;SharedAccessKey=kd/hD5LFdFcO7OcDbEcggHPajsgU+MX9eEip/VtCdkw=';
var Mqtt = require('azure-iot-device-mqtt').Mqtt;
var DeviceClient = require('azure-iot-device').Client
var Message = require('azure-iot-device').Message;

var client = DeviceClient.fromConnectionString(connectionString, Mqtt);

function sendMessage(pose_name) {
    // Create a message and send it to the IoT hub every second
    setInterval(function(){
        // Simulate telemetry.
        var pose_name;
        var message = new Message(JSON.stringify({
            pose: pose_name
        }));
        
        //console.log('Sending message: ' + message.getData());

        // Send the message.
        client.sendEvent(message, function (err) {
            if (err) {
                console.error('send error: ' + err.toString());
            } else {
                console.log('message sent');
            }
        });

    }, 1000);
}



$(document).ready(function(){

   $("#enter").focus();

   var blink = setInterval(function(){
        $(".text").fadeTo(500, 0.4,
            function(){
                $(".text").fadeTo(500, 1);
            });
    },1000);

    $(window).keypress(function(e){
        var keycode = e.keyCode;
        if (keycode == 49) {
            command = "Hi, Alexa"   // fist
        } else if (keycode == 50) {
            command = "Hello there!"  //waveOut
        } else if (keycode == 51) {
            command = "Call Help"   //waveIn
        } else if (keycode == 52) {
            command = "Play Music"    //fingersStretch
        } else {
            return false;
        }

        $(".text").html(command);
        sendMessage(command);
    });
    
});