const express = require('express')
const path = require('path')

const port = 3000
const clientPath = path.join(__dirname, 'client')

const app = express()
app.use(express.static(clientPath))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
