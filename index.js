require('dotenv').config();
const express = require("express")
const router = require("./src/Instrumentos/Router");

const cors = require('cors');
const routerSugerencias = require('./src/sugerencias/sugerenciasRt');


const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())


app.use("/Instrumentos", router)

app.use("/sugerencias", routerSugerencias)



app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});