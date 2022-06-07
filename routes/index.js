var express = require('express');
var router = express.Router();
var Article = require("../models/article")

/* GET home page. */
router.get('/', async function (req, res, next) {
  let articles = await Article.find()
  res.render('index', { title: 'Bloggy', articles });
});

// 
router.get('/favorities', function (req, res, next) {
  res.render('favorities');
});

// THIS ROUTE WILL ADD TO FAVOUITIES THE ARTICLE AND REDIRECT TO THE HOME PAGE
router.get('/favorities/:id', async function (req, res, next) {
  let article = await Article.findById(req.params.id)
  console.log("Add to favoutrities..............")
  res.redirect("/favorities")
});

module.exports = router;
