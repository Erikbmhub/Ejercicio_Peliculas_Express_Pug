// Importamos Express.
const express = require("express");

// Importamos dotenv para cargar las variables de entorno.
require("dotenv").config();

// Importamos las rutas de películas.
const filmsRoutes = require("./routes/films.routes");

// Importamos el controlador de la página de inicio.
const { homeController } = require("./controllers/films.controller");

// Creamos la aplicación de Express.
const app = express();

// Definimos el puerto del servidor.
const PORT = process.env.PORT || 3000;

// Configuramos Pug como motor de plantillas.
app.set("view engine", "pug");

// Indicamos dónde se encuentran las vistas.
app.set("views", "./views");

// Indicamos dónde se encuentran los archivos estáticos.
app.use(express.static("public"));

// Middleware para interpretar los datos enviados desde formularios.
app.use(express.urlencoded({ extended: true }));

// Definimos la ruta GET para mostrar la página de inicio.
app.get("/", homeController);

// Conectamos las rutas de películas con el prefijo /film.
app.use("/film", filmsRoutes);

// Arrancamos el servidor.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
