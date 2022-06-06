var express = require('express');
var router = express.Router();
var Article = require("../models/article")

/* GET home page. */
router.get('/', async function (req, res, next) {
  let articles = await Article.find()
  res.render('index', { title: 'Bloggy', articles });
});

module.exports = router;
