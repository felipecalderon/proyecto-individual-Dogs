const { DataTypes, Sequelize } = require('sequelize');
const {conn} = require('../db')

const Dog = conn.define('dog', {
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
    validate: {
      len: [3,20]
    }
  },

  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    }
  },
  origen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alturamin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 15,
      max: 100,
    }
  },

  alturamax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 15,
      max: 100,
    }
  },
  pesomin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 5,
      max: 80,
    }
  },
  pesomax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 5,
      max: 80,
    }
  },
  vidamin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 2,
      max: 35,
    }
  },
  vidamax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 2,
      max: 35,
    }
  }
})

module.exports = { Dog }
