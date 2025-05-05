const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }, //encriptar
    priority: { type: DataTypes.STRING, allowNull: true }, //money
}, {
    tableName: 'Users',
    timestamps: false,
})

module.exports = User;