const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

export const minPlayerPlace = 1,
    maxPlayerPlace = 200,
    minCoinsWon = 0,
    maxCoinsWon = 100000;

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
        validate: {
            notNull: {
                msg: "Żadna opcja nie jest wybrana"
            }
        }
    },
    tournament_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Żadna opcja nie jest wybrana"
            },
        }
    },
    playerPlace: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            not:{
                args: /-\d+/,
                msg: "W tym kontekście wartość nie może być ujemna"
            },
            min: {
                args: minPlayerPlace,
                msg: `Wartość pola powinna być od ${minPlayerPlace} do ${maxPlayerPlace}`
            },
            max: {
                args: maxPlayerPlace,
                msg: `Wartość pola powinna być od ${minPlayerPlace} do ${maxPlayerPlace}`
            }
        }
    },
    coinsWon: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            not:{
                args: /-\d+/,
                msg: "W tym kontekście wartość nie może być ujemna"
            },
            min: {
                args: minCoinsWon,
                msg: `Wartość pola powinna być od ${minCoinsWon} do ${maxCoinsWon}`
            },
            max: {
                args: maxCoinsWon,
                msg: `Wartość pola powinna być od ${minCoinsWon} do ${maxCoinsWon}`
            }
        }
    }
});

module.exports = Participation;
