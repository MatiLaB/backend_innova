const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Clinic = require('./clinic');

const Review = sequelize.define('Review', {
    rating: { type: DataTypes.FLOAT, allowNull: false },
    comment: { type: DataTypes.TEXT, allowNull: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
    clinicId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Clinics', key: 'id' } },
    professionalId: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Professionals', key: 'id' } }
}, {
    tableName: 'Reviews',
    timestamps: false,
});

module.exports = Review;