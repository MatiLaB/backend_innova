const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Review = sequelize.define('Review', {
    rating: { type: DataTypes.FLOAT, allowNull: false },
    comment: { type: DataTypes.TEXT, allowNull: true },
}, {
    tableName: 'reviews',
    timestamps: true,
});

module.exports = Review;