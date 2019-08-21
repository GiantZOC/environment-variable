
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
app.get('/', (req, res) => res.send(process.env))

app.listen(port, () => console.log(process.env))
