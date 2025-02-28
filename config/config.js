// Cargar variables de .env
require('dotenv').config();

const config = {
    jwt: {
        secret: process.env.TOKEN_SECRET_KEY,
        expiresIn: process.env.TOKEN_EXPIRE_IN,
        refreshEvery: parseInt(process.env.TOKEN_REFRESH_EVERY, 10),
    },

    bcrypt: {
        salRounds: parseInt(process.env.SALT_ROUNDS, 10),
    },

    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },

    server: {
        port: parseInt(process.env.SERVER_PORT, 10),
        host: process.env.SERVER_HOST,
    },
};

// Exportar el modulo
module.exports = config;
