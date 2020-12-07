const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Participation = sequelize.define('Participation', {
    player_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tournament_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    player_place: {
        type: Sequelize.STRING,
        allowNull: true
    },
    coins_won: {
        type: Sequelize.NUMBER,
        allowNull: true
    }
});

module.exports = Participation;