const Sequelize = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('tfztquzi','tfztquzi','jieZ5gYdJ4vO_m5QgLa4YJhLnKF7nL-l',{
    host:"babar.db.elephantsql.com",
    port: "5432",
    dialect: 'postgres'
});

module.exports = {
    Sequelize: Sequelize ,
    sequelize: sequelize
}