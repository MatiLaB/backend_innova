const User = require('./user');
const Clinic = require('./clinic');
const Professional = require('./professional');
const Review = require('./review');
const Report = require('./report');
const defineAssociations = require('./associations');

// Ejecutar asociaciones entre modelos
defineAssociations();

// Exportar todos los modelos juntos
module.exports = {
    User,
    Clinic,
    Professional,
    Review,
    Report,
};