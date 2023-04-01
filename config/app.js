const express = require('express'); //ASI SE IMPORTA UNA LIBRERIA

const encuestaDAERoutes = require('../routes/encuestaDAERoutes'); //dos puntos para salirse

const app = express();



app.use(express.json()) //cuerpo

app.use("/api/v1/encuestaDAE", encuestaDAERoutes);

module.exports=app;