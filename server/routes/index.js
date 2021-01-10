'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');

//Try to login with passport
router.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
        // console.log(user) // тут возвращается пользователь
        if (err) { return next(err); }
        if (!user) { return res.send('not found') }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send('Success ' + user.username);
        });
    })(req, res, next);
});

/*Logout*/
router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});


module.exports = router;
