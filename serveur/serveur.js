var express = require('express');
var app     = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var config = require('./config.js');
var videogame_route = require('./routes/videogames.js');
var tournament_route = require('./routes/tournaments.js');
var matchs_route = require('./routes/matches.js');
var user_route = require('./routes/users.js');
var team_route = require('./routes/teams.js');
var bet_route = require('./routes/bets.js');

var theuser = require('./models/user.js');

/*
Configuration
*/
var port = process.env.PORT || 7070;
mongoose.connect(config.database);
var db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database is connected");    
    app.set('superSecret', config.secret);
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true }));

    express.Router().options('/authenticate', function(req,res){
        res.status(200).send();
    })

    app.use(function(req, res, next){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        next();
    })

    app.post('/authenticate', function(req,res){
        console.log(req.body);
        
        theuser.findOne({name: req.body.name}, function(err, user){
            if (err) throw err;

            if(!user){
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } 
            else if (user) {
            // check if password matches
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } 
                else{
                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign({name: user.name}, app.get('superSecret'), {
                        expiresIn: "24h" // expires in 24 hours
                    });
                    console.log('var token : ' , token);

                    console.log(user);
                    // return the information including token as JSON
                    theuser.update({name: req.body.name}, {token: token}, function(err, newVal){
                        console.log(newVal);
                    });

                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        id_token: token,
                        id: user.id
                    });

                }   
            }
        });
    });

    //
   /* app.use(function(req, res, next) {
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });    
                } 
                else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;    
                    next();
                }
            });
        } 
        else {
            // if there is no token
            // return an error
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.' 
            });
        }
    });*/

    app.use('/', videogame_route);
    app.use('/', matchs_route);
    app.use('/', tournament_route);
    app.use('/', user_route);
    app.use('/', team_route);
    app.use('/', bet_route);

});


server.listen(port);