exports = module.exports = function(connection){
    var router = require('express').Router();
    router.get('/tournament', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT * FROM tournament', function(err, rows, fields) {
            if (!err){
                res.status(200).send(JSON.stringify(rows));
                console.log('Connection entrante sur la route /tournament');
            }
            else{
                res.status(400).send();
            }
        }); 
    });

    return router;
};

