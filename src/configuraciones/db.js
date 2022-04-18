const sequelize = require('sequelize');

//BASE DE DATOS
const db = new sequelize(
    'sigfar', //nombre de la base de datos
    'isisza', //usuario de la BD
    'DIOS', //clave del usuario
    {
        host: 'localhost', //servidor
        dialect: 'mysql' , //dbms
        port: '3306', //puerto
    }

);
//exportar
module.exports=db;