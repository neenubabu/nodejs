const fs = require('fs');
const child_process = require('child_process');


for(var i=0; i<3; i++) {
   var workerProcess = child_process.exec('node support.js '+i,function 
      (error, stdout, stderr) {
      
      if (error) {
        console.log('exec++++++++++++++++: ' );
        
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
      console.log('exec++++++++++++++++: ' );
      
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
   });

   workerProcess.on('exit', function (code) {
    console.log('exec++++++++++++++++: ' );
    
      console.log('Child process exited with exit code '+code);
   });
}



for(var i = 0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);
 
    workerProcess.stdout.on('data', function (data) {
        console.log('spawning++++++++++++++++: ' );
        
       console.log('stdout: ' + data);
    });
 
    workerProcess.stderr.on('data', function (data) {
        console.log('spawning++++++++++++++++: ' );
        
       console.log('stderr: ' + data);
    });
 
    workerProcess.on('close', function (code) {
        console.log('spawning++++++++++++++++: ' );
        
       console.log('child process exited with code ' + code);
    });
}


for(var i = 0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);
 
    workerProcess.stdout.on('data', function (data) {
        console.log('fork++++++++++++++++: ' );
        
       console.log('stdout: ' + data);
    });
 
    workerProcess.stderr.on('data', function (data) {
        console.log('fork++++++++++++++++: ' );
        
       console.log('stderr: ' + data);
    });
 
    workerProcess.on('close', function (code) {
        console.log('fork++++++++++++++++: ' );
        
       console.log('child process exited with code ' + code);
    });
 }