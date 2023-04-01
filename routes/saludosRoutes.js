const express = require("express");
const saludosController = require("../controllers/saludosControllers");
const router = express.Router();

router.route("/").get(saludosController);

module.exports=router;//ESPORTAR