const express = require('express')
const router = express.Router()

const file = require('./file')

router.use('/file', file)

module.exports = router
