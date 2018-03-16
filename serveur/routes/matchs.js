module.exports = (function(){
    var router = require('express').Router();
    var modMatch = require('./../models/match.js');
    var modOdd = require('./../models/odd.js')
    var modTourn = require('./../models/tournament.js')
    
    router.get('/matchs', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        var json;

        modMatch.find({},function(err, match){
            if(!err){
                //console.log(match);
                json = JSON.parse(JSON.stringify(match));
                console.log('Connection entrante sur la route /Matchs');
                
                console.log(json);
                console.log('--------------');
                console.log(json[0].tournament + json[1].tournament);
                console.log('--------------');
                
              /*  for(var i=0; i < json.length; i++){
                    modTourn.find({_id: json[i].tournament}, (function(err, tourn){                        
                        console.log('TOURN : ' + json[i].tournament);
                        console.log(tourn);
                        json[i].tournament = tourn;
                        console.log('-------------');
                        console.log(json[i].tournament);
                        modOdd.find({_id: json[i].odds}, (function(err, odds){
                            json[i].odds = odds
                            console.log('-------------');
                            console.log(json[i].odds);
                        }()))                       
                    }()))
                }
                res.status(200).send(json);*/

               /* */
                /*
                 modTourn.find({_id: json[0].tournament}, (function(err, tourn){                        
                        console.log('TOURN : ' + json[0].tournament);
                        json[0].tournament = tourn;
                        console.log('-------------');
                        console.log(json[0].tournament);
                        modOdd.find({_id: json[0].odds}, (function(err, odds){
                            json[0].odds = odds
                            console.log('-------------');
                            console.log(json[0].odds);
                            res.status(200).send(json)
                        }))                       
                    }))
                */
            }
            else{
                res.status(400).send();
            }
        })

        for(var i = 0; i < json.length; i++){
            modTourn.find({_id: json[i].tournament}, function(err,tourn){
                console.log(tourn);
            })
        }






    });
/*
    router.get('/matchs/:idMatchs', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT Team_Name FROM team INNER JOIN play_team ON play_team.Team_Id = team.Team_Id WHERE Matchs_Id = ' + req.params.idMatchs, function(err, rows, fields){
            if (!err){
                //Si c'est un match entre équipe
                if(JSON.stringify(rows) != '[]'){
                    res.status(200).send(JSON.stringify(rows));
                    console.log('Le match choisi est un match entre équipe');
                }
                //Sinon c'est entre joueurs
                else{
                    connection.query('SELECT Player_Pseudo FROM player INNER JOIN play_player ON play_player.Player_Id = player.Player_Id ' +
                    'WHERE Matchs_ID = ' + req.params.idMatchs, function(err, rows, fields){
                        if (!err){
                            res.status(200).send(JSON.stringify(rows));
                            console.log('Le match choisi est un match entre joueurs');
                        }
                        else{   
                            res.status(400).send();
                        }
                    });
                }  
            }
            else{
                res.status(400).send();
            }
        });
    });
*/
    return router;
})();
