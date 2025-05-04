const User = require('./user');
const Clinic = require('./clinic');
const Professional = require('./professional');
const Review = require('./review');
const Report = require('./report');

function defineAssociations() {
    // USER
    User.hasMany(Review, { foreignKey: 'userId' });
    User.hasMany(Report, { foreignKey: 'userId' });

    // CLINIC
    Clinic.hasMany(Review, { foreignKey: 'clinicId' });
    Clinic.hasMany(Report, { foreignKey: 'clinicId' });

    // PROFESSIONAL
    Professional.hasMany(Review, { foreignKey: 'professionalId' });

    // REVIEW
    Review.belongsTo(User, { foreignKey: 'userId' });
    Review.belongsTo(Clinic, { foreignKey: 'clinicId', allowNull: true });
    Review.belongsTo(Professional, { foreignKey: 'professionalId', allowNull: true });

    // REPORT
    Report.belongsTo(User, { foreignKey: 'userId' });
    Report.belongsTo(Clinic, { foreignKey: 'clinicId' });

    // CLINIC <-> PROFESSIONAL (Many to Many)
    Clinic.belongsToMany(Professional, {
        through: 'ClinicProfessional',
        foreignKey: 'clinicId',
        otherKey: 'professionalId'
    });
    Professional.belongsToMany(Clinic, {
        through: 'ClinicProfessional',
        foreignKey: 'professionalId',
        otherKey: 'clinicId'
    });
}

module.exports = defineAssociations;