'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    tel: DataTypes.STRING,
    region: DataTypes.STRING,
    point: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    //테이블 간의 관계 설정
  };
  return User;
};