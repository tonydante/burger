//DEPENDANCIES
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

//SERVER STATIC CONTENT FOR TH APP FROM THE "PUBLIC DIRECTORY" IN THE APPLICATION DIRECTORY.

app.use(express.static(process.cwd() + '/public'));
//EXPRESS TO SERVER STATIC FILES 
//app.use('/assets', express.static(__dirname + '/public/assets/css'));

app.use(bodyParser.urlencoded({
	extended: false
}));

//OVERRIDE WITH POST HAVING ? _METHOD=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port);