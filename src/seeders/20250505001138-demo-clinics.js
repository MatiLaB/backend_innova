'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clinics', [
      {
        name: 'Clínica Médica W',
        location: 'Cam. El Alba 9500, Oficina 306 B, Las Condes, Santiago',
        rating: 4.9,
        legalStatus: 'Autorizada por el MINSAL',
        agreementNote: '',
        procedures: ['Lipo sin cirugía', 'Full Face', 'Double Care'],
        averagePrice: '500000',
        yearsActive: 5,
        facilities: 'Instalaciones modernas con estacionamiento propio',
        link: 'https://clinicamedicaw.cl'
      },
      {
        name: 'Clínica Meu',
        location: 'Av. Apoquindo 6275, Oficina 135, Las Condes, Santiago',
        rating: 4.8,
        legalStatus: 'Autorizada por la Seremi de Salud',
        agreementNote: '',
        procedures: ['Armonización facial', 'Bioestimulador de colágeno', 'Lipopapada sin cirugía'],
        averagePrice: '600000',
        yearsActive: 3,
        facilities: 'Equipo especializado en técnicas brasileñas y seguimiento post-tratamiento',
        link: 'https://clinicameu.cl'
      },
      {
        name: 'Clínica ETMA',
        location: 'Av. El Alba 2, N° 582, Chicureo, Colina, Santiago',
        rating: 4.7,
        legalStatus: 'Autorizada por el MINSAL',
        agreementNote: '',
        procedures: ['Tratamientos corporales no invasivos', 'Rejuvenecimiento de la piel'],
        averagePrice: '450000',
        yearsActive: 4,
        facilities: 'Especialistas en tecnología 100% no invasiva',
        link: 'https://clinicaetma.cl'
      },
      {
        name: 'Clínica Inspira',
        location: 'Santiago, Chile',
        rating: 4.6,
        legalStatus: 'Autorizada por el MINSAL',
        agreementNote: '',
        procedures: ['Depilación láser Soprano Ice Platinum', 'Radiofrecuencia Octopolar', 'Peeling químico facial'],
        averagePrice: '400000',
        yearsActive: 6,
        facilities: 'Tecnología de última generación y atención integral',
        link: 'https://grupoinspira.cl'
      },
      {
        name: 'Clínica ES',
        location: 'Padre Mariano 391, Oficina 506, Santiago',
        rating: 4.5,
        legalStatus: 'Autorizada por el MINSAL',
        agreementNote: '',
        procedures: ['Cirugía plástica', 'Cosmetología', 'Odontología estética'],
        averagePrice: '700000',
        yearsActive: 10,
        facilities: 'Atención personalizada en cirugía plástica y estética',
        link: 'https://clinicaes.cl'
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