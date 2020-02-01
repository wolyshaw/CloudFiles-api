const { Signale } = require('signale')

exports.server = new Signale({
  scope: 'server'
})

exports.mysql = new Signale({
  scope: 'mysql'
})
