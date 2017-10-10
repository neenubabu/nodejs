var fs = require("fs");
console.log( __dirname );
console.log( __filename );
console.log("Going to read directory /dir");
fs.readdir("/NEENU/TECHTALK/node js/dir",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});