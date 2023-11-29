const db = require("../../db_config");

class SugerenciasMd {
    static async getbyId(req, res) {
        try {
            const { id } = req.params;
            console.log(id);

            const [resultados] = await db.promise().query('SELECT * FROM sugerencias WHERE id = ?', [id]);

            if (resultados.length > 0) {
                res.json(resultados);
            } else {
                res.status(404).json({ message: 'No se encontraron sugerencias con el ID proporcionado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error interno del servidor.' });
        }
    }
}

module.exports = SugerenciasMd;
