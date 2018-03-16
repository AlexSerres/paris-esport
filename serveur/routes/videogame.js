exports = module.exports = function(connection){
    var router = require('express').Router();

    router.get('/videoGames', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT VG_Name, VG_Id FROM videogame', function(err, rows, fields) {
            if (!err){
                res.status(200).send(JSON.stringify(rows));
                console.log('Connection entrante sur la route /VideoGame');
            }
            else{
                res.status(400).send();
            }
        }); 
    });


    router.get('/videoGames/:idVGame/matchs', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT Matchs_Id, Matchs_Name, Matchs_Odds_1, Matchs_Odds_2, matchs.Tournament_Id FROM matchs ' +
        'INNER JOIN tournament ON matchs.Tournament_Id = tournament.Tournament_Id ' +
        'INNER JOIN videogame ON tournament.VG_Id = videogame.VG_Id ' +
        'WHERE videogame.VG_Id = ' + req.params.idVGame + ' AND tournament.Tournament_Date > CURRENT_DATE()', function(err, rows, fields){
            if (!err){
                res.status(200).send(JSON.stringify(rows));
                console.log('Connection entrante sur la route /VideoGame/' + req.params.idGame + '/Matchs');
            }
            else{
                res.status(400).send();
            }
        });
    });

    return router;
};

