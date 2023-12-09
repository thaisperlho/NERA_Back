const Sequelize = require('sequelize');
require('dotenv').config();

console.log(process.env);
// Conexão com o banco de dados
const sequelize = new Sequelize(
    process.env.DB_URI
    );

module.exports = {
    Sequelize: Sequelize ,
    sequelize: sequelize
}