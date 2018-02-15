
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var home = require('./routes/home');
var eventSearch = require('./routes/eventSearch');
var timeSelect = require('./routes/timeSelect');
var feelingSelect = require('./routes/feelingSelect');
var wip = require('./routes/wip');
var map = require('./routes/map');
var spider = require('./routes/spider');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/home', home.view);
app.get('/eventSearch', eventSearch.view);
app.get('/timeSelect', timeSelect.view);
app.get('/feelingSelect', feelingSelect.view);
app.get('/eventSearch', (req, res) => { res.redirect("/eventSearch/0")});
app.get('/eventSearch/:id([0-9])', eventSearch.view);
app.get('/wip',wip.view);
app.get('/map',map.view);
app.get('/spider', spider.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
