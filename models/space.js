module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Space', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      comment: '空间ID',
    },
    type: {
      type: DataTypes.ENUM('Alioss', 'Qiniu', 'Aws', 'Google Cloud'),
      comment: '空间类型',
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [4, 32]
      },
      comment: '空间名称',
    },
    remark: {
      type: DataTypes.STRING.BINARY,
      comment: '空间备注',
    },
  })
}
