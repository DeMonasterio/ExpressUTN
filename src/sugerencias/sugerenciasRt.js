const Router = require("express");
const routerSugerencias = Router();
const { addOne, getAll, deleteOne } = require("../sugerencias/sugerenciasCt");
const { getbyId } = require("../sugerencias/sugerenciasMD");

routerSugerencias.post("/", addOne);
routerSugerencias.get("/", getAll);
routerSugerencias.get("/:id", getbyId);
routerSugerencias.delete("/", deleteOne);

module.exports = routerSugerencias;
