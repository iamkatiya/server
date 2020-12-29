const express = require('express')
const path = require('path')
const engines = require('consolidate')

const port = 3000
const clientPath = path.join(__dirname, 'client')

const app = express()
app.use(express.static(clientPath))

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
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

app.use(require('body-parser').json({ limit: '10mb' }))

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
