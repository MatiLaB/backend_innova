'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('reports', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
    await queryInterface.addColumn('reports', 'clinicId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Clinics',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('reports', 'userId');
    await queryInterface.removeColumn('reports', 'clinicId');
  }
};
