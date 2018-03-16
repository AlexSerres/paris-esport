exports = module.exports = function(connection){
    var router = require('express').Router();
    
    router.get('/matchs', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT Matchs_Id, Matchs_Name, Matchs_Odds_1, Matchs_Odds_2, matchs.Tournament_Id FROM matchs INNER JOIN tournament ON matchs.Tournament_Id = '+
        'tournament.Tournament_Id', function(err, rowsMatc, fields) {
            if (!err){
                console.log('Connection entrante sur la route /Matchs');
                temp = JSON.stringify(rowsMatc);
                temp2 = JSON.parse(temp);
                console.log(temp2);

                for(i = 0; i < temp2.length; i++){
                    connection.query('SELECT * FROM tournament WHERE Tournament_Id = ' + temp2[i].Tournament_Id, function(err,rowsTour,fields){
                        temp3 = JSON.stringify(rowsTour);
                        temp4 = JSON.parse(temp3);
                        console.log(temp4);
                    });
                }
                
                res.status(200).send(JSON.stringify(rowsMatc));
            }
            else{
                res.status(400).send();
            }
        });
    });

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

    return router;
};
