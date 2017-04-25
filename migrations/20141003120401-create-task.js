"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('tasks', {
        id: {
          type: Sequelize.STRING,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        title: Sequelize.STRING,
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: Sequelize.DATE,
        userId: {
          type: Sequelize.STRING,
          onDelete: "CASCADE",
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .dropTable('tasks');
  }
};
