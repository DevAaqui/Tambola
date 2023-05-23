const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Ticket = sequelize.define('ticket', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ticket: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = Ticket