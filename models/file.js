module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      comment: '文件ID',
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      comment: '文件名称',
    },
  })

  File.associate = models => {
    File.hasMany(models.Version, {
      foreignKey: 'fileId',
      as: 'versions'
    })
  }

  return File
}
