module.exports = (function(){
    var router = require('express').Router();
    var modBet = require('./../models/bet.js');
 
    router.use(function(req, res, next){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        next();
    })

    router.post('/bet', function(req,res){
         if(req.statusCode = 200){
            var newBet = new modBet({
                value: req.body.value,
                rate: req.body.rate,
                total: req.body.total
            });

            console.log(newBet);
            newBet.save(function(err, data){
                if(!err){
                    res.status(200).send(data);
                }
                else{

                }
            });
        };
    });
    return router;
})();

