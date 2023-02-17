require('dotenv').config();
const { Sequelize } = require('sequelize');
const {
  DB_NAME, DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
  });

sequelize.authenticate().then(() => {
  console.log('Conexión exitosa 👌');
}).catch((error) => {
  console.error('🤯 Error al conectar: ', error);
});

module.exports = {
  ...sequelize.models,
  conn: sequelize
}