const Router = require("express")
const routerSugerencias = Router()  
const { addOne, getAll } = require("../sugerencias/sugerenciasCt");



routerSugerencias.post ("/", addOne);

routerSugerencias.get("/", getAll)

module.exports = routerSugerencias;
