'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ClinicProfessional', {
      clinicId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'clinics',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      professionalId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'professionals',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ClinicProfessional');
  }
};
