require('dotenv').config();
const express = require("express")
const router = require("./src/Instrumentos/Router");
//nuevo
const cors = require('cors');
const routerSugerencias = require('./src/sugerencias/sugerenciasRt');


const app = express();
const PORT = process.env.PORT;

//nuevo sacado de chat no me dejaba hacer peticiones desde react tambien lo instale npm install cors
app.use(cors());
//nuevo
app.use(express.json())


app.use("/Instrumentos", router)

//nuevo
app.use("/sugerencias", routerSugerencias)

app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});