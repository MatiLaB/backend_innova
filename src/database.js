require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
    }
);

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida a db');

        await sequelize.sync();
    }
    catch (error) {
        console.error('No se pudo conectar a la db: ', error);
    }    
}

connectDB();

module.exports = sequelize;