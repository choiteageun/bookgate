'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return[
      queryInterface.addColumn("BookTradeBoards", "boardNum", {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn("BookTradeBoards", "fromBoardNum", {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn("BookTradeBoards", "writer", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("BookTradeBoards", "subject", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("BookTradeBoards", "content", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("BookTradeBoards", "whetherComment", {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn("BookTradeBoards", "writeTime", {
        type: Sequelize.DATE
      })
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("BookTradeBoards", "boardNum"),
      queryInterface.removeColumn("BookTradeBoards", "commentNum"),
      queryInterface.removeColumn("BookTradeBoards", "writer"),
      queryInterface.removeColumn("BookTradeBoards", "writer"),
      queryInterface.removeColumn("BookTradeBoards", "writer"),
      queryInterface.removeColumn("BookTradeBoards", "writer"),
      queryInterface.removeColumn("BookTradeBoards", "writer")
    ]
  }
};
