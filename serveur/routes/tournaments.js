module.exports = (function(){
    var router = require('express').Router();
    var modTourn = require('./../models/tournament.js');
    var modMatch = require('./../models/match.js')
    

    //Route qui affiche tous les tournois, tous jeux confondus
    router.get('/tournaments', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        modTourn.find(function(err, tournament){
            if(!err){
                res.status(200).send(tournament);
                console.log('Connection entrante sur la route /tournament');
            }
            else{
                res.status(400).send();
            }
        })
    });

    //Route qui affiche tous les matchs d'un tournoi
    router.get('/tournaments/:idTourn', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    
        modMatch
        .find({tournament: req.params.idTourn})
        .populate('tournament')
        .populate({
            path: 'odds',
            match: {condi: 'win'}
        })
        .exec(function(err, match){
            if(!err){
                console.log('Requete pour avoir tous les matchs du tournoi ' + match.tournament);
                res.status(200).send(match);
            }
            else{
                res.status(400).send();
            }
        });

    });

    router.post('/tournament', function(req,res){
         if(req.statusCode = 200){

            var newTourn = new modTourn({
                name: req.body.name,
                date: req.body.date,
                hour: req.body.hour,
                videogame: req.body.videogame
            })

            
            newTourn.save(function(err, data){
                if(!err){
                    res.status(200).send(data._id);
                }
                else{
                }
            });
        }
    });

    

    return router;
})();

