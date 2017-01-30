// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var movies = require('./app/movie-crud');
var theater = require('./app/theater-crud');

// configuration ===========================================
	
// config files
//var db = require('./config/db');
app.use(bodyParser.json({})); // parse application/json 
app.use('/movie', movies);



var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://127.0.0.1/:27017/movies';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to DB");
});

var port = process.env.PORT || 3000; // set our port
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app