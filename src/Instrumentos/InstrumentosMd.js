const db = require("../../db_config");
 
  class ModelMd {
    static getAll(req, res) {
      res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  
      const categorias = req.query.categorias;
  
      let query;
      let params;
  

      if (categorias && Array.isArray(categorias)) {
        // filtra por más categorías
        const placeholders = categorias.map(() => '?').join(', ');
        query = `SELECT * FROM Instrumentos INNER JOIN categorias ON instrumentos.id_categoria = categorias.id WHERE categorias.nombre_categoria IN (${placeholders})`;
        params = categorias;
      } else if (categorias) {
        // filtra por una categoría
        query = "SELECT * FROM Instrumentos INNER JOIN categorias ON instrumentos.id_categoria = categorias.id WHERE categorias.nombre_categoria = ?";
        params = [categorias];
      } else {
        // muestra todos
        query = "SELECT * FROM Instrumentos";
        params = [];
      }
      // buscar http://localhost:3301/Instrumentos?categorias=viento&categorias=teclado
  
      db.query(query, params, (error, resultados) => {
        if (error) {
          console.error(error);
          res.status(500).send({ error: 'Internal Server Error' });
        } else {
          res.status(200).send(resultados);
        }
        
      });
    }
  }
  
  module.exports = ModelMd;