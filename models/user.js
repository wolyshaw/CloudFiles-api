module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      comment: '用户ID',
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [4, 32]
      },
      comment: '用户名称',
    },
    remark: {
      type: DataTypes.STRING.BINARY,
      comment: '用户备注',
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 32]
      },
      comment: '用户密码',
    },
  })
}
