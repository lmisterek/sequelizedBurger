// *********************************************************************************
// burger-api-routes.js - this file offers a set of routes for displaying data
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbPost) {
    	
    	var burgers = [];

    	// Create the data for the view
    	for (var i = 0; i < dbPost.length; i++) {
    		var burger = {
    			id: dbPost[i].dataValues.id,
    			burger_name: dbPost[i].dataValues.burger_name,
    			devoured: dbPost[i].dataValues.deboured
    		};

    		// Add each burger to the burgers array
    		burgers.push(burger);
    	}

      res.render('index', {burgers: burgers});
    });
  });

  app.post("/", function(req, res) {
  	db.Burger.create({
  		burger_name: req.body.burger_name
  	});

  	res.redirect("/");
  });
};