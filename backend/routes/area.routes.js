const express = require("express");
const router = express.Router();
const AreaController = require("../controller/Area.controller");

router.get("/", AreaController.listarAreas);
router.get("/continente/:continente", AreaController.buscarPorContinente);
router.get("/:id", AreaController.buscarAreaPorId); 

module.exports = router;
