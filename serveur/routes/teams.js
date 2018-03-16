module.exports = (function(){
    var router = require('express').Router();
    var modTeam = require('./../models/team.js');
 

    router.post('/team', function(req,res){
         if(req.statusCode = 200){
            var newTeam = new modTeam({
                name: req.body.name
            })

            newTeam.save(function(err, data){
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

