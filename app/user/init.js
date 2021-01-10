const passport = require('passport')
const cors = require('cors')

function initUser (app) {
  app.get('/profile', passport.authenticationMiddleware(), renderProfile)
  app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/profile'
  }))
}

function renderProfile (req, res) {
  res.render('user/profile', {
    username: req.user.username
  })
}

module.exports = initUser
