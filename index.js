const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const apis = require('./apis')
const { server: serverLog } = require('./log')

const { sequelize } = require('./models')

const app = express()

app.use(bodyParser.json())

app.all('*', apis)

console.log(sequelize)

sequelize.sync()

app.listen(config.port, () => serverLog.success(`port in ${config.port}`))
