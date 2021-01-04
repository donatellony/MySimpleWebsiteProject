const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Tournament = sequelize.define('Tournament', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sponsor: {
        type: Sequelize.STRING,
        allowNull: true
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    fund: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Tournament;