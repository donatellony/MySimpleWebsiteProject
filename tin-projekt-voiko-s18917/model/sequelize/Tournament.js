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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        }
    },
    sponsor: {
        type: Sequelize.STRING,
        allowNull: true
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        }
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull:true
    },
    fund: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            not:{
              args: /-\d+/,
              msg: "W tym kontekście wartość nie może być ujemna"
            }
        }
    }
});

module.exports = Tournament;
