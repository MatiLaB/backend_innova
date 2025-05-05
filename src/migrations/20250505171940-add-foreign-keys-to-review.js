'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Reviews', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
    await queryInterface.addColumn('Reviews', 'clinicId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Clinics',
        key: 'id'
      },
      onDelete: 'SET NULL'
    });
    await queryInterface.addColumn('Reviews', 'professionalId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Professionals',
        key: 'id'
      },
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Reviews', 'userId');
    await queryInterface.removeColumn('Reviews', 'clinicId');
    await queryInterface.removeColumn('Reviews', 'professionalId');
  }
};
