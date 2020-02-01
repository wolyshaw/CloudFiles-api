module.exports = (sequelize, DataTypes) => {
  const Version = sequelize.define('Version', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      comment: '版本ID',
    },
    fileId: {
      type: DataTypes.BIGINT(11),
      primaryKey: true,
      unique: true,
      comment: '文件ID',
    },
    space: {
      type: DataTypes.STRING,
      comment: '所在空间',
    },
    path: {
      type: DataTypes.STRING,
      comment: '文件路径',
    },
  })

  Version.associate = models => {
    Version.belongsTo(models.File, {
      foreignKey: 'fileId',
      as: 'files'
    })
  }

  return Version
}
