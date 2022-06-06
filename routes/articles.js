var express = require('express');
var router = express.Router();
var Article = require("../models/article")

/* GET home page. */
router.get('/', async function (req, res, next) {
  let articles = await Article.find()
  // console.log(articles)
  res.render("articles/list", { articles });
});

router.get('/add', async function (req, res, next) {
  res.send("Hello");
});



module.exports = router;
