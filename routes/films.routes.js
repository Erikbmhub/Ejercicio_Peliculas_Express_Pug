// Importamos Express.
const express = require("express");

// Creamos un enrutador.
const router = express.Router();

// Importamos los controladores de películas.
const {
  getFilmController,
  searchFilmController,
} = require("../controllers/films.controller");

// Definimos la ruta POST para recibir el título del formulario.
router.post("/", searchFilmController);

// Definimos la ruta GET para buscar una película por su título.
router.get("/:title", getFilmController);

// Exportamos el enrutador.
module.exports = router;
