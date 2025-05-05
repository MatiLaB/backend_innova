'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Reports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reportType: {
        type: Sequelize.STRING, // tipo de problema: sanitario, administrativo, etc.
        allowNull: false,
      },
      evidence: {
        type: Sequelize.STRING,
        allowNull: true, // link o algo para evidenciar el problema
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pendiente', // otros estados podrían ser "resuelto", "en revisión"
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Reports");
  }
};
