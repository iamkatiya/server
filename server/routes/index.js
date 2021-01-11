'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var userModel = require('../models/user');
var bcrypt = require('bcryptjs');

//Try to login with passport
router.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
        // console.log(user) // тут возвращается пользователь
        if (err) { return next(err); }
        if (!user) { return res.send('not found') }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send('Success auth');
        });
    })(req, res, next);
});

/*Logout*/
router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

/*POST for register*/
router.post('/register', function (req, res) {
    //Insert user
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        var registerUser = {
            userFirstname: req.body.userFirstname,
            userLastname: req.body.userLastname,
            username: req.body.username,
            password: hash
        }
        //Check if user already exists
        userModel.find({ username: registerUser.username }, function (err, user) {
            if (err) console.log(err);
            // if (user.length) return res.redirect('/login');
            const newUser = new userModel(registerUser);
            newUser.save(function (err) {
                console.log('Inserting');
                if (err) console.log(err);
                req.login(newUser, function (err) {
                    console.log('Trying to login');
                    if (err) console.log(err);
                    return res.redirect('/');
                });
            });
        });
    })
});


module.exports = router;
