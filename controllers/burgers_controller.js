//FUNCTIONS FOR ROUTING WHICH INCLUDES THE LOGIC FOR EACH ROUTE

var express = require('express');
var router = express.Router();
var models = require('../models');
//Burger is capital because the model is always captilized.
var burger = models.Burger;
var sequelizeConnection = models.sequelize;

//ROUTE FOR THE ROOT FILE / 
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//ROUTE FOR THE /BURGERS WHICH CREATES AN OBJECT WITH THE BURGERS DATA AND RENDERS IN USING HANDLEBARS IN INDEX.HANDLEBARS FILE
router.get('/burgers', function(req, res) {
    burger.findAll().then(function(burgers) {
            hbsObject = { "burgers": burgers };
            res.render('index', hbsObject);
        })
        //console.log(hbsObject
});

//POST ROUTE WHICH POST A BURGER NAME AND IT WAS DEVOURED OR NOT
router.post('/burgers/create', function(req, res) {
    burger.create({
        name: req.body.name,
        devoured: false
    }).then(function() {
        res.redirect("/");
    })
});

//PUT ROUTE 
router.put('/burgers/devour/:id', function(req, res) {
    burger.findById(req.params.id).then(function(data) {
        data.update({
            devoured: true
        }).then(function() {
            res.redirect("/");
        })
    })
});

router.get('/burgers/deleteAll', function(req, res) {

		burger.destroy({truncate:true}).then(function(){
			res.redirect("/burgers")
		})

})

//ROUTE FOR DELETE 
router.delete('/burgers/clear/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.findById(req.params.id).then(function(data) {
    	data.destroy().then(function(){
    		res.redirect("/burgers");
    	})
     
    });
});

module.exports = router;
