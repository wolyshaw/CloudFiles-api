const express = require('express')
const router = express.Router()

const create = require('./create')
const edit = require('./edit')
const view = require('./view')

router.post('/create', create)
router.put('/edit', edit)
router.post('/view', view)

module.exports = router
