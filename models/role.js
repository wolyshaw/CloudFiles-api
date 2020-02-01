module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Role', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      comment: '角色ID',
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      comment: '角色名称',
    },
    remark: {
      type: DataTypes.STRING.BINARY,
      comment: '角色备注',
    },
  })
}
