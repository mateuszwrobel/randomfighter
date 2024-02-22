'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('starships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      MGLT: {
        type: Sequelize.STRING,
      },
      cargo_capacity: {
        type: Sequelize.STRING,
      },
      consumables: {
        type: Sequelize.STRING,
      },
      cost_in_credits: {
        type: Sequelize.STRING,
      },
      created: {
        type: Sequelize.STRING,
      },
      crew: {
        type: Sequelize.STRING,
      },
      edited: {
        type: Sequelize.STRING,
      },
      hyperdrive_rating: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.STRING,
      },
      manufacturer: {
        type: Sequelize.STRING,
      },
      max_atmosphering_speed: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      passengers: {
        type: Sequelize.STRING,
      },
      films: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      pilots: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      starship_class: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('starships');
  },
};
