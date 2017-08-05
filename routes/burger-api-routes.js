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
      res.render('index', dbPost);
    });
  });

  app.post("/", function(req, res) {
  	db.Burger.create({
  		burger_name: req.body.burger_name
  	});
  });
};