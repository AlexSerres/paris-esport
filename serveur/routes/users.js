module.exports = (function(){
    var router = require('express').Router();
    var modUser = require('./../models/user.js');
    
    router.get('/users/:idUsers/bids', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        connection.query('SELECT * FROM bet WHERE User_Id = ' + req.params.idUsers, function(err, rows, fields){
            if (!err){
                res.status(200).send(JSON.stringify(rows));
                console.log('Connection entrante sur la route /users/bids');
            }
            else{
                res.status(400).send();
            }
        });
    });

    router.get('/users/:idUsers', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

        modUser
    });

    router.get('/users', function(req,res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");


        modUser.find({token: req.headers.authorization}, function(err, user){
            res.status(200).send(user);
            console.log(user);
        })
    });

    return router;
})();

