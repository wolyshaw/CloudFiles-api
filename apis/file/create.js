const { sequelize, File, Version } = require('../../models')

module.exports = async (req, res) => {
  try {
    const created = await sequelize.transaction(async t => {
      const { space, path, ...rest } = req.body
      const fileRes = await File.create(rest, {transaction: t})
      const { id: fileId } = fileRes.dataValues
      await Version.create({space, path, fileId}, {transaction: t})
      return fileRes
    })
    res.send(created.dataValues)
  } catch (error) {
    res.send(error)
  }
}
