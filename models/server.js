const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        //se asignan las funcionalidades instaladas de express
        this.app = express();
        //viene desde el archivo .env
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.js'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`escuchando puerto http://localhost:${this.port}`)
        })
    }

}

module.exports = Server