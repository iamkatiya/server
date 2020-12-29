const express = require('express')
const path = require('path')
const engines = require('consolidate')

const port = 3000

const app = express()

const json = require("./test")

const jsonParser = express.json()
app.post("/test", jsonParser, function (req, res) {
  if (!req.body) {
    return res.sendStatus(400)
  }
  let status = ''
  if (json.data[0].login === req.body.login && json.data[0].password === req.body.password) {
    status = 'success'
  } else {
    status = 'error'
  }
  res.json(status)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const staticOptions = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  redirect: false,
  setHeaders: function (res) {
    res.set('x-timestamp', Date.now())
    res.cacheControl = {
      public: true,
      mustRevalidate: true,
      maxAge: 60 * 60 * 24 * 7, // 7 дней
    }
  },
}

app.engine('html', engines.swig)
app.set('view engine', 'html')

app.set('views', [path.join(process.cwd(), 'node_modules/client/dist')])

const index = function (req, res) {
  res.render('./index.html')
}


app.use('/', express.static('node_modules/client/dist', staticOptions))

app.get('/', index)
app.get('/' + '/*', index)

module.exports = app
app.use(express.static("dist"));
