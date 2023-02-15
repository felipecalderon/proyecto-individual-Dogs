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
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('dog', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };
