var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

/* route upon hitting the main page. render hbsObject to our index page */
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

/* how we handle a request to our api/burgers route. We insert a new burger to the database */
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({id: result.insertId});
  });
});

/* how we handle a request to our api/burgers/:id route. We update the database with its devoured state */
router.put("/api/burgers/:id", function(req,res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;