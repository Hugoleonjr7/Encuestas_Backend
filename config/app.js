const express = require('express'); //ASI SE IMPORTA UNA LIBRERIA

const saludosRoutes = require('../routes/saludosRoutes'); //dos puntos para salirse

const app = express();

app.use(express.json()) //cuerpo

app.use("/api/v1/saludo", saludosRoutes);

module.exports=app;