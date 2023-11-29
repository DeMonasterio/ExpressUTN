const db = require("../../db_config")

const getAll = async (req, res) => {
const [sugerencia] = await db.promise().query('SELECT * FROM sugerencias')
res.json(sugerencia)
}

const addOne = async (req, res) => {
    const {title, description, image} = req.body;
    const [sugerencia] = await db.promise().query('INSERT INTO sugerencias (title, description, image) VALUES (?, ?, ?)', [title, description, image])
    if (sugerencia) {
        res.send({id: sugerencia.insertId,title,description,image})
        
    } else {
        console.error('Error al agregar el producto sugerido a la base de datos');
        res.status(500).send('Error al agregar el producto sugerido a la base de datos');
    }
}



const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.promise().query('DELETE FROM sugerencias WHERE id = ?', [id]);
    
        result.affectedRows > 0 ?  res.status(404).json({ message: 'No se encontró la sugerencia para eliminar' }) : res.json({ message: 'Sugerencia eliminada correctamente' })
      } catch (error) {
        console.error('Error al eliminar sugerencia:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
}

module.exports = { addOne, getAll, deleteOne };