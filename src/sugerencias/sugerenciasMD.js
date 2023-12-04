const db = require("../../db_config")

class SugerenciasMd {
    static async addOne(req, res){
        res.header("Access-Control-Allow-Origin", `http://localhost:5173/sugerencias`);
        const [resultados] = await db.promise().query("SELECT * FROM sugerencias");
        res.send(resultados);
    }
}

module.exports = SugerenciasMd