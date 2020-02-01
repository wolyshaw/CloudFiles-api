const Sequelize = require('sequelize')
const { sql } = require('../config')

const { database, username, password, ...rest } = sql

const sequelize = new Sequelize(database, username, password, rest)

const Role = sequelize.import('./role.js')
const User = sequelize.import('./user.js')
const File = sequelize.import('./file.js')
const Space = sequelize.import('./space.js')
const Version = sequelize.import('./version.js')

exports.sequelize = sequelize
exports.Role = Role
exports.User = User
exports.File = File
exports.Space = Space
exports.Version = Version
