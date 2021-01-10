var express = require('express');
var session = require('express-session');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bCrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/aisatest";
//Connect to our database
try {
  mongoose.connect(uri, {useNewUrlParser: true});
  var db = mongoose.connection;
  db.on('error', function (err) {
    console.log(err);
  });
  db.once('open', function (callback) {
    console.log('Connected to MongoDB');
  });
} catch (err) {
  console.log("Error : " + err);
}

var routes = require('./routes/index');
var User = require('./models/user');

var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}

var app = express();
app.use(passport.initialize());
app.use(passport.session());

// view engine setup

app.use(cors());
// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// required for passport session
app.use(session({
  secret: 'secrettexthere',
  saveUninitialized: true,
  resave: true
}));

app.use('/', routes);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    // check in mongo if a user with username exists or not
    User.findOne({'username': username},
      function (err, user) {
        // In case of any error, return using the done method
        if (err)
          return done(err);
        // Username does not exist, log error & redirect back
        if (!user) {
          console.log('User Not Found with username ' + username);
          return done(null, false);
        }
        // User exists but wrong password, log the error
        if (!isValidPassword(user, password)) {
          console.log('Invalid Password');
          return done(null, false);
        }
        // User and password both match, return user from
        // done method which will be treated like success
        return done(null, user);
      }
    );
  }
));

// will print stacktrace
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send("err")
  console.log(err)
  return 'error'
});

module.exports = app
