const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Professional = sequelize.define('Professional', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    specialty: { type: DataTypes.STRING, allowNull: false }, // Ej: Cirujano Plástico, Anestesista
}, {
    tableName: 'Professionals',
    timestamps: false,
});

module.exports = Professional;