const app = require("./config/app")

const dotenv = require('dotenv');


dotenv.config({path: "./config.env"});

const port = process.env.PORT;

app.listen(port,()=>{
    console.log("Escuchando en el puerto "+ port);
});




