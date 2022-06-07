var express = require('express');
var router = express.Router();
var User = require("../models/user")

/* GET users listing. */

//ROUTE FOR REGISTERING NEW USER
router.get('/register', function (req, res, next) {
  res.render('users/register');
});

// ROUTE FOR SUBMITTING CREDENTIALS OF A NEW USER
router.post('/register', async function (req, res, next) {
  let user = new User(req.body)
  await user.save()
  res.redirect('/');
});

//ROUTE FOR LOGIN USER
router.get('/login', function (req, res, next) {
  res.render('users/login');
});

// ROUTE FOR SUBMITTING CREDENTIALS OF A LOGIN USER
router.post("/login", async function (req, res, next) {
  let user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("user login")
  if (!user) return res.redirect("/login");
  req.session.user = user;
  return res.redirect("/");
});

module.exports = router;
