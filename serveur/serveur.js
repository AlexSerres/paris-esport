var express = require('express');
var app     = express();
var server = require('http').createServer(app);
var mysql      = require('mysql');

var videogame_route = require('./routes/videogame.js');
var tournament_route = require('./routes/tournament.js');
var matchs_route = require('./routes/matchs.js');
var user_route = require('./routes/users.js')

//Parametre de la bdd
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'paris_esport'
});
//Connexion a la bdd
connection.connect(function(err){
  if(!err) {
    console.log("Database is connected");    
  } 
  else {
    console.log("Database not online");    
  }
});

app.use('/', videogame_route(connection));
app.use('/', matchs_route(connection));
app.use('/', tournament_route(connection));
app.use('/', user_route(connection));
server.listen(8080);