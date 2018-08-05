'use strict';
module.exports = (sequelize, DataTypes) => {
  var BookList = sequelize.define('BookList', {
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  BookList.associate = function(models) {
    // associations can be defined here
  };
  return BookList;
};