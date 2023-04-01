const express = require("express");
const encuestaDAEControllers = require("../controllers/encuestaDAEControllers");
const router = express.Router();

router.route("/").get(encuestaDAEControllers);

module.exports=router;//EXPORTAR