const express = require('express') //import express library
const bodyParser = require('body-parser')
const db = require('../Controller/register')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// app
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


//http requests methods

app.post('/register',db.register)
//   listen to the ports
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })