const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Participation = sequelize.define('Participation', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    player_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // primaryKey: true
    },
    tournament_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // primaryKey:true
    },
    playerPlace: {
        type: Sequelize.STRING,
        allowNull: true
    },
    coinsWon: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Participation;
