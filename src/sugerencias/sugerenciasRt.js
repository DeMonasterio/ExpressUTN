const Router = require("express");
const routerSugerencias = Router();
const { addOne, getAll, updateOne, deleteOne } = require("../sugerencias/sugerenciasCt");
const { getbyId } = require("../sugerencias/sugerenciasMD");

routerSugerencias.get("/", getAll);
routerSugerencias.get("/:id", getbyId);
routerSugerencias.patch("/:id", updateOne);
routerSugerencias.post("/", addOne);
routerSugerencias.delete("/:id", deleteOne);

module.exports = routerSugerencias;
