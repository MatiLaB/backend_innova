const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

const Clinic = sequelize.define('Clinic', {
    name: { type: DataTypes.STRING, allowNull: false },
    //email: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: false }, //encriptar
    rating: { type: DataTypes.FLOAT, allowNull: true }, 
    legalStatus: { type: DataTypes.STRING, allowNull: true }, // autorizada por seremi, etc
    agreementNote: { type: DataTypes.TEXT, allowNull: true }, // Ej: convenios y eso
}, {
    tableName: 'clinics',
    timestamps: false,
})

module.exports = Clinic;