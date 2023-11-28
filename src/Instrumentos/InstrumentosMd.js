const db = require("../../db_config")

class ModelMd {
    static async getAll(req, res){
        res.header("Access-Control-Allow-Origin", `http://localhost:5173`),
        db.query("SELECT * FROM Instrumentos", (error, resultados) => { error ? console.log(error): res.send(resultados)})
    }
}

module.exports = ModelMd