// models/Report.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Report = sequelize.define('Report', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reportType: {
        type: DataTypes.STRING, // tipo de problema: sanitario, administrativo, etc.
        allowNull: false,
    },
    evidence: {
        type: DataTypes.STRING,
        allowNull: true, // link o algo para evidenciar el problema
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pendiente', // otros estados podrían ser "resuelto", "en revisión"
    },
}, {
    tableName: 'reports',
    timestamps: true, // crea createdAt y updatedAt
});

module.exports = Report;