const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

export const minRating = 0,
    maxRating = 99999,
    minCoins = 0,
    maxCoins = 999999

const Player = sequelize.define('Player', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [3,20],
                msg: "Pole powinno zawierać od 3 do 20 znaków"
            },
        }
    },
    rating: {
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
            min: {
                args: minRating,
                msg: `Wartość pola powinna być od ${minRating} do ${maxRating}`
            },
            max: {
                args: maxRating,
                msg: `Wartość pola powinna być od ${minRating} do ${maxRating}`
            }
        }
    },
    coins: {
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
            min: {
                args: minCoins,
                msg: `Wartość pola powinna być od ${minCoins} do ${maxCoins}`
            },
            max: {
                args: maxCoins,
                msg: `Wartość pola powinna być od ${minCoins} do ${maxCoins}`
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane",
            },
            isEmail: {
                msg: 'Pole powinno zawierać prawidłowy adres email'
            }
        }
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        }
    }

});

module.exports = Player;
