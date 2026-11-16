// Importamos la función que consulta la API de OMDb.
const { getFilm } = require("../services/films.service");

// Creamos el controlador para mostrar una película.
const getFilmController = async (req, res) => {
  // Obtenemos el título de la película desde los parámetros de la URL.
  const title = req.params.title;

  try {
    // Obtenemos los datos de la película desde OMDb.
    const film = await getFilm(title);
    // Renderizamos la plantilla y le pasamos los datos de la película.
    res.render("film", { film });
  } catch (error) {
    console.error(error);
    // Enviamos el error al navegador.
    res.status(404).render("error", { message: error.message });
  }
};

// Creamos el controlador para mostrar la página dse inicio.
const homeController = (req, res) => {
  // Renderizamos la plantilla de inicio.
  res.render("home");
};

// Creamos el controlador para recibir el título del formulario.
const searchFilmController = (req, res) => {
  // Obtenemos el título enviado desde el formulario.
  const title = req.body.title;

  // Redirigimos a la ruta GET de la película.
  res.redirect(`/film/${encodeURIComponent(title)}`);
};
// Exportamos los controladores.
module.exports = {
  getFilmController,
  homeController,
  searchFilmController,
};
