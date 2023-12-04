const db = require("../../db_config")

const getAll = async (req, res) => {
    try {
        const [suggestion] = await db.promise().query('SELECT * FROM sugerencias')
        res.json(suggestion)
    } catch (error) {
        console.error('Failed to get the suggestions', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const addOne = async (req, res) => {
    const {title, description, image} = req.body;
    const [suggestion] = await db.promise().query('INSERT INTO sugerencias (title, description, image) VALUES (?, ?, ?)', [title, description, image])
    if (suggestion) {
        res.status(201).send({id: suggestion.insertId, title, description, image});
    } else {
        console.error('Failed to insert suggestion into database');
        res.status(500).send('Failed to insert suggestion into database');
        return;
    }
}
const updateOne = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const [existingSuggestion] = await db
        .promise()
        .execute('SELECT id FROM sugerencias WHERE id = ?', [id]);
  
      if (!existingSuggestion.length) {
        return res.status(404).json({ msg: 'Sugerencia no encontrada' });
      }
  
      // Update the suggestion
      const queryString = 'UPDATE sugerencias SET title = ?, description = ?, image = ? WHERE id = ?';
      const values = [updatedData.title, updatedData.description, updatedData.image, id];
  
      const [result] = await db.promise().execute(queryString, values);
  
      if (result.affectedRows === 0) {
        return res.status(500).json({ msg: 'Error al actualizar la sugerencia' });
      }
      res.status(202).json({ msg: 'Actualización aceptada' });
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  };

const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.promise().query('DELETE FROM sugerencias WHERE id = ?', [id]);
    
        result.affectedRows > 0 ?  res.status(404).json({ message: 'The to be erased suggestion was not founded' }) : res.status(200).json({ message: 'Suggestion deleted' })
      } catch (error) {
        console.error('Failed to delete the suggestion:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
}

module.exports = { addOne, getAll, updateOne, deleteOne };