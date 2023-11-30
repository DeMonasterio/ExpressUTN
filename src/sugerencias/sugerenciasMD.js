const db = require("../../db_config");

class SugerenciasMd {
    static async getbyId(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const [resultados] = await db.promise().query('SELECT * FROM sugerencias WHERE id = ?', [id]);
            resultados.length > 0 ? res.json(resultados) : res.status(404).json({ message: 'No suggestions found with ID provided' })

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = SugerenciasMd;
