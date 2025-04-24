const express = require("express");
const router = express.Router();
const AreaController = require("../controller/Area.controller");

router.get("/", AreaController.listarAreas);
router.get("/:id", AreaController.buscarAreaPorId); 
router.get("/continente/:continente", AreaController.buscarPorContinente); // /areas/continente/Ásia

module.exports = router;
