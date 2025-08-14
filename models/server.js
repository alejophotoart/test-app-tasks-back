const express = require('express');
const cors = require('cors');
const { createServer } = require('http')
const { dbConnection } = require('../db/config.db.js');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = createServer(this.app);

        this.routePaths = {
            task:       '/api/task',
        }

        // Conectar a base de datos (mongo)
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi App
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() )
    }

    routes() {
        this.app.use(this.routePaths.task, require('../routes/task.route'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log("Server running in port", this.port);
        });
    }
}

module.exports = Server