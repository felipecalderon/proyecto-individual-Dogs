const { DataTypes, Sequelize } = require('sequelize');
const {conn} = require('../db')

const Dog = conn.define('dogs', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  altura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  peso: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  anios: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = { Dog }
