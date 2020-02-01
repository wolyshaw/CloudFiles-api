const { sequelize, File, Version } = require('../../models')

module.exports = async (req, res) => {
  const { id } = req.body
  try {
    const edited = await sequelize.transaction(async t => {
      const oldFile = await File.findOne({where: {id}})
      const { id: fileId, ...rest } = oldFile.dataValues
      await Version.create({fileId, ...rest})
      return File.update(req.body, {where: {id}, transaction: t})
    })
    res.send(edited.dataValues)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
