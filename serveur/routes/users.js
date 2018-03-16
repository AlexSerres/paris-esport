exports = module.exports = function(connection){
    var router = require('express').Router();

    router.get('/users', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT * FROM user', function(err, rows, fields) {
            if (!err){
                res.status(200).send(JSON.stringify(rows));
                console.log('Connection entrante sur la route /users');
            }
            else{
                res.status(400).send();
            }
        }); 
    });

    router.post('/users/addUser', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        var newData = req.body.User_Id;
        console.log(newData);
        res.sendStatus(200);
    });

    router.get('/users/:idUsers/bids', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT * FROM bet WHERE User_Id = ' + req.params.idUsers, function(err, rows, fields){

        });
    });
    return router;
};

