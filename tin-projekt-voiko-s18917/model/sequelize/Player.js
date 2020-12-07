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
        allowNull: false
    },
    rating: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    coins: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: Sequelize.NUMBER,
        allowNull: false
    }

});

module.exports = Player;