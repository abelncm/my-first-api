const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const personsRoute = require('./routing/person.route');
const calculateRoute = require('./routing/calculate.route');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/persons', personsRoute);
app.use('/calculate', calculateRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})