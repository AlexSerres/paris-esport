module.exports = (function(){
    var router = require('express').Router();
    var modMatch = require('./../models/match.js');
    var modVg = require('./../models/videogame.js');
    var modTeam = require('./../models/team.js');
    var modPlayer = require('./../models/player.js');
    
    
    router.get('/matchs', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        modMatch
        .find({})
        .populate('tournament')
        .populate('videogame')
        .populate({
            path: 'odds',
            match: {condi: 'win'}
        })
        .exec(function(err, match){
            console.log('Requete sur la route /matchs');
            res.status(200).send(match);
        });
    });


    router.get('/matchs/:idMatchs', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        console.log(req.params.idMatchs);
        
        modMatch
        .find({_id: req.params.idMatchs})
        .populate('odds')
        .exec(function(err, match){
            if(!err){
                console.log('requete sur le match : ' + match.name);
                res.status(200).send(match[0].odds);
            }
            else{
                res.status(400).send();
            }
        });
    });

    router.get('/matchs/:idMatchs/info', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        
        modMatch
        .find({_id: req.params.idMatchs})
        .populate('tournament')
        .populate('teams')
        .populate('players')
        .exec(function(err, match){
            if(!err){
                console.log('requete sur le match : ' + match.name);
                res.status(200).send(match);
            }
            else{
                res.status(400).send();
            }
        });
    });

    router.post('/matchs', function(req, res){
        if(req.statusCode = 200){
            //console.log(req.body)

            modVg.find({name: req.body.videogame}, function(err, vg){
                if(!err){
                    console.log('vg_id : '+ req.body.videogame);
                    console.log(vg);
                    console.log(vg[0]._id);

                    var newMatch = new modMatch({
                        name: req.body.name,
                        bestof: req.body.bestof,
                        tournament: req.body.tournament,
                        teams: req.body.teams,
                        odds: req.body.odds,
                        videogame: vg[0]._id
                    })
                    console.log(newMatch);
                    newMatch.save(function(err, data){
                        if(!err){
                            res.status(200).send(data._id);
                        }
                        else{

                        }
                    });
                }
            });

            
            
        }
    });

    return router;
})();
