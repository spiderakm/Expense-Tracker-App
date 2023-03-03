const express = require('express')
const app = express()
const bodyParser=require("body-parser")
const cors=require("cors")
const sequelize = require('./models/dataModel')
const routes = require('./routes/route')

app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())

app.use(routes)

sequelize.sync().then(() => {
    app.listen(4000)
})