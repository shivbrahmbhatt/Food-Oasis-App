const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index.ejs', {
      user: req.user
    });
  });



router.get('/login', (req, res) => {
    res.render("login.ejs")
})

router.get('/register', (req, res) => {
    res.render("register.ejs")
})

router.get('/customermap', authController.isLoggedIn, (req, res) => {
    res.render('customermap.ejs', {
      user: req.user
    });
  });

router.get('/seller', authController.isLoggedIn, (req, res) => {
    res.render('seller.ejs', {
      user: req.user
    });
  });


router.get('/profile', authController.isLoggedIn, (req, res) => {
    console.log(req.user);
    if( req.user ) {
      res.render('profile.ejs', {
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
    
  })

module.exports = router;