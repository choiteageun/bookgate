'use strict';
module.exports = (sequelize, DataTypes) => {
  var BookTradeBoard = sequelize.define('BookTradeBoard', {
    email: DataTypes.STRING
  }, {});
  BookTradeBoard.associate = function(models) {
    // associations can be defined here
  };
  return BookTradeBoard;
};