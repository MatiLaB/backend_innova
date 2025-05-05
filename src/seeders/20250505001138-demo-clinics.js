'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clinic', [
      {
        name: 'Clínica Bella Vida',
        location: 'Calle Salud 123, Ciudad Belleza',
        rating: 4.5,
        legalStatus: 'Autorizado por SEREMI',
        agreementNote: 'Convenio con Clinica de Los Andes'
      },
      {
        name: 'Estética Premium',
        location: 'Av. Belleza 456, Ciudad Cuidado',
        rating: 4.8,
        legalStatus: 'Investigado por SEREMI',
        agreementNote: ''
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clinic', null, {});
  }
};

/* 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
*/