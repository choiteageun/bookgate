'use strict';

module.exports =
{
  up: (queryInterface, Sequelize) =>{
    return[
      queryInterface.addColumn("Users", "tel", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Users", "region", {
        type: Sequelize.STRING
      })
    ]
  },

  down: (queryInterface, Sequelize) => {

    return [
      queryInterface.removeColumn("Users", "tel"),
      queryInterface.removeColumn("Users", "region")
    ]
  }
}