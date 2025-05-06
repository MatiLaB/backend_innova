'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clinics', [
      {
        name: 'Clínica Bella Vida',
        location: 'Calle Salud 123, Ciudad Belleza',
        rating: 4.5,
        legalStatus: 'Autorizado por SEREMI',
        agreementNote: 'Convenio con Clinica de Los Andes',
        procedures: ['Botox', 'Liposucción'],
        averagePrice: '5000000',
        yearsActive: 5,
        facilities: 'Solo un piso'
      },
      {
        name: 'Estética Premium',
        location: 'Av. Belleza 456, Ciudad Cuidado',
        rating: 4.8,
        legalStatus: 'Investigado por SEREMI',
        agreementNote: '',
        procedures: ['Aumento mamario', 'Peeling facial'],
        averagePrice: '6500000',
        yearsActive: 7,
        facilities: 'Grandes pabellones'
      }
    ]);
    console.log('Seed de clínicas ejecutado')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clinics', null, {});
  }
};

/* 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
*/