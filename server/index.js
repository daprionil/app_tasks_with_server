require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const server = require('./src/server.js');
const { database } = require('./src/db.js');
const rootRouter = require('./src/routes/rootRouter.js');
//Database from sequelize

//Server
const port = process.env.PORT_APP ?? 3001;

//Middlewares
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/', rootRouter);

//Sincronizate database postgresql
database.sync({ alter: true }).then(() => {
    console.log('Database connection is successfull');

    //Up server
    server.listen(port, () => {
        console.log('Servidor en puerto: ' + port);
    });
});