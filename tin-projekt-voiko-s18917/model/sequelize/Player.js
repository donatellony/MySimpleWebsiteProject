const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

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
