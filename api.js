const express = require("express");
const cors = require("cors");

// Importa la función `generateMovements`
const { generateMovements } = require("./generateMovements");

const app = express();

// Habilita CORS para que la API pueda ser consumida desde otros dominios
app.use(cors());

// Define la ruta para la API
app.get("/movements", (req, res) => {
  // Obtiene los parámetros de la consulta
  const { length, startDate, endDate } = req.query;

  // Genera la lista de movimientos aleatorios utilizando la función `generateMovements`
  const movements = generateMovements(
    length,
    new Date(startDate),
    new Date(endDate)
  );

  // Envía la lista de movimientos como respuesta
  res.json(movements);
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("API running on port 3000");
});
