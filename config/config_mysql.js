// Configuracion de conexion de DB

// Importar modulo mysql
var mysql = require('mysql2');

// Importar datos de la DB
const { db } = require('./config.js');

// Creamos la conexion a la database
const connection = mysql.createConnection(db);

// Intentamos connectar a la database
connection.connect((error) => {
    if (error) {
        console.log('Error al conectar la base de datos: ' + error.message);
        throw error;
    }

    console.log('Conexion a la base de datos exitosa');
});

module.exports = connection;
