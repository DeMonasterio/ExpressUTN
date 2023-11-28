const db = require("../../db_config")

const getAll = async (req, res) => {
const [sugerencia] = await db.promise().query('SELECT * FROM sugerencias')
res.json(sugerencia)
}

const addOne = async (req, res) => {
    const {title, description, image} = req.body;
    const [sugerencia] = await db.promise().query('INSERT INTO sugerencias (title, description, image) VALUES (?, ?, ?)', [title, description, image])
    if (sugerencia) {
        res.send({
            id: sugerencia.insertId,
            title,
            description,
            image,
        });
    } else {
        console.error('Error al agregar el producto sugerido a la base de datos');
        res.status(500).send('Error al agregar el producto sugerido a la base de datos');
    }
}
module.exports = { addOne, getAll };