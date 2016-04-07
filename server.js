var dispatcher = require('httpdispatcher');

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('images');
dispatcher.setStatic('bower_componsnts');
dispatcher.setStatic('bower_components');
dispatcher.setStatic('css');
dispatcher.setStatic('js');

//A sample GET request    
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});    




var http = require('http');










