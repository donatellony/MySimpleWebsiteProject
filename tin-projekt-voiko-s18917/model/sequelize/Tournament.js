const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const maxFund = 1000000,
    minFund = 5000;

// module.exports = {maxFund, minFund};

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
            },
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
        allowNull:true,
        // validate:{
        //     isAfter: {
        //         args: this.startDate.value,
        //         msg: "Data okończenia tuenieju jest wcześniejsza od rozpoczęcia"
        //     }
        // }
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
            },
            min:{
                args: minFund,
                msg: `Wartość pola powinna być od ${minFund} do ${maxFund}`
            },
            max:{
                args: maxFund,
                msg: `Wartość pola powinna być od ${minFund} do ${maxFund}`
            }
        }
    }
});

module.exports = Tournament;
