var http = require("http");
var express = require('express');

var fs = require("fs");
var events = require('events');


http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    fs.readFile('tutorial.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());        
    });
     
    console.log("Program Ended");
    var data = fs.readFileSync('tutorial.txt');
    response.end(data.toString());    
    
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');