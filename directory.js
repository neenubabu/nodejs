var fs = require("fs");

console.log("Going to create directory C:\NEENU\TECHTALK\node js\dir");
fs.mkdir('/NEENU/TECHTALK/node js/dir',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});


console.log("Going to delete directory C:\NEENU\TECHTALK\node js\dir");
fs.rmdir("/NEENU/TECHTALK/node js/dir",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("/NEENU/TECHTALK/node js/dir",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});