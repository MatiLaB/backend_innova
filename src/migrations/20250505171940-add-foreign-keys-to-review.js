'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('reviews', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
    await queryInterface.addColumn('reviews', 'clinicId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Clinics',
        key: 'id'
      },
      onDelete: 'SET NULL'
    });
    await queryInterface.addColumn('reviews', 'professionalId', {
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
    await queryInterface.removeColumn('reviews', 'userId');
    await queryInterface.removeColumn('reviews', 'clinicId');
    await queryInterface.removeColumn('reviews', 'professionalId');
  }
};
