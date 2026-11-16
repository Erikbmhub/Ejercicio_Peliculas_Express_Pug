// Importamos la URL base de la API de OMDb.
const OMDB_URL = require("../config/omdb");

// Creamos la función para buscar una película por su título.
const getFilm = async (title) => {
  // Construimos la URL con la clave API y el título de la película.
  const url = `${OMDB_URL}?apikey=${process.env.OMDB_API_KEY}&t=${encodeURIComponent(title)}`;

  // Realizamos la petición a la API.
  const response = await fetch(url);

  // Convertimos la respuesta a formato JSON.
  const data = await response.json();

  // Comprobamos si la API ha encontrado la película.
  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  // Devolvemos los datos de la película.
  return data;
};

// Exportamos la función para utilizarla en otros archivos.
module.exports = { getFilm };
