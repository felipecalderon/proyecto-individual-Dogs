const { DataTypes, Sequelize } = require('sequelize');
const {conn} = require('../db')

const Temperament = conn.define('temperament', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
    timestamps: false
})

module.exports = { Temperament }