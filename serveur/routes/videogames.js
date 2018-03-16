module.exports = (function(){
    var router = require('express').Router();
    var modVG = require('./../models/videogame.js');
    var modMatch = require('./../models/match.js');
    var modTourn = require('./../models/tournament.js');


    router.get('/videogames', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        modVG.find(function(err, videogame){
            if(!err){
                console.log('Connection entrante sur la route /VideoGame');
                res.status(200).send(videogame);                
            }
            else{
                res.status(400).send('error');
            }
        })
    });

    //route qui affiche tous les matchs par rapport a un jeu
    router.get('/videogames/:idVGame/matchs', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        modMatch
        .find({videogame: req.params.idVGame})
        .populate({
            path: 'odds',
            match: {condi: 'win'}
        })
        .exec(function(err, match){
            if(!err){
                console.log('Route qui affiche tous les matchs du jeux video');
                //console.log(match);
                res.status(200).send(match);
            }
            else{
                res.status(400).send();
            }
        });
    });

    //Route qui affiche tous les tournois par rapport a un jeu
    router.get('/videogames/:idVideogames/tournaments', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        modTourn
        .find({videogame: req.params.idVideogames})
        .exec(function(err, tournament){
            if(!err){
                console.log('Route qui affiche tous les tournois du jeux video ');
                //console.log(tournament);
                res.status(200).send(tournament);
            }
            else{
                res.status(400).send();
            }
        });
    });

    return router;
})();

