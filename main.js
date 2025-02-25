const connection = require('./config/config_mysql');

/* Este componente sirve  para levantar o iniciar el sevidor */
const app = require('./app');
const server = app.listen(app.get('port'));
//Websockets
const socketIO = require('socket.io');
/* const db = require('express-myconnection'); */
const io = socketIO(server);

io.of('/index').on('connection', (socket) => {
    /* Listar avisos */
    connection.query('SELECT * from usuarios', (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
        }
        let listadoGeneralAnuncios;

        for (let i = 0; i < results.length; i++) {
            listadoGeneralAnuncios = results[i];
        }

        io.of('/index').to(socket.id).emit('/index/listarAnuncios', listadoGeneralAnuncios);
    });

    /* Editar avisos */

    /* Resgitrar avisos */
});
io.of('/login').on('connection', (socket) => {});
io.of('/administrador').on('connection', (socket) => {});

/* SERVIDOR DE COSULTA A DB CON SOCKET PARA EL LADO CLIENTE (backend) */
io.of('/cliente').on('connection', (socket) => {});

console.log('Servidor inicializado en puerto', app.get('port'));
console.log(connection);
