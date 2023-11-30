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



const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.promise().query('DELETE FROM sugerencias WHERE id = ?', [id]);
    
        result.affectedRows > 0 ?  res.status(404).json({ message: 'The to be erased suggestion was not founded' }) : res.status(200).json({ message: 'Suggestion deleted' })
      } catch (error) {
        console.error('Failed to delete the suggestion:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

module.exports = { addOne, getAll, deleteOne };