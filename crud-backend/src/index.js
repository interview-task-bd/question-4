const express = require('express');
const bodyParser = require('body-parser');
const {config} = require('dotenv')
const routes = require('./routes')
const db = require('../models')
config({path:'.env'})
const port = process.env.PORT || 5000;
const app = express()
app.use(bodyParser.json())
app.use('/',routes)
db.sequelize.sync().then(()=>app.listen(port,()=>console.log(`Your application is running on port ${port}`)))


