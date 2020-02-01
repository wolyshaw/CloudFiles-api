const { sequelize, File, Version } = require('../../models')

module.exports = async (req, res) => {
  try {
    const fileRes = await File.findOne({
      where: {id: req.body.id},
      include: [Version]
    })

    res.send(fileRes.dataValues)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
