const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Professional = sequelize.define('Professional', {
    name: { type: DataTypes.STRING, allowNull: false },
    mail: { type: DataTypes.STRING, allowNull: false },
    specialty: { type: DataTypes.STRING, allowNull: false }, // Ej: Cirujano Plástico, Anestesista
}, {
    tableName: 'professionals',
    timestamps: true,
});

module.exports = Professional;