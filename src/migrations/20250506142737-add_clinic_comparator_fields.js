'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Clinics', 'procedures', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true
    });
    await queryInterface.addColumn('Clinics', 'averagePrice', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Clinics', 'yearsActive', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    await queryInterface.addColumn('Clinics', 'facilities', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Clinics', 'procedures');
    await queryInterface.removeColumn('Clinics', 'averagePrice');
    await queryInterface.removeColumn('Clinics', 'yearsActive');
    await queryInterface.removeColumn('Clinics', 'facilities');
  }
};
