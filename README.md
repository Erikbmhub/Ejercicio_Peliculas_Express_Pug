# 🎬 Buscador de películas – Express y Pug

Aplicación web de búsqueda de películas desarrollada con **Node.js, Express y Pug**, que utiliza la API de [OMDb](https://www.omdbapi.com/) para consultar información cinematográfica.

El proyecto utiliza **Server-Side Rendering (SSR)** mediante el motor de plantillas Pug, generando las páginas HTML desde el servidor.

## 🚀 Funcionalidades

- Página de inicio con un formulario para buscar películas por título.
- Consulta de información cinematográfica mediante la API de OMDb.
- Visualización de los detalles de cada película:
  - Título.
  - Año de estreno.
  - Director.
  - Género.
  - Argumento.
  - Póster.
- Gestión de películas no encontradas mediante una página de error personalizada.
- Navegación entre la página de inicio y los resultados.
- Diseño adaptable a diferentes tamaños de pantalla.

## 🛠️ Tecnologías utilizadas

- **Node.js** – Entorno de ejecución de JavaScript.
- **Express 5** – Framework para crear el servidor y gestionar las rutas.
- **Pug** – Motor de plantillas para el renderizado del lado del servidor.
- **OMDb API** – Servicio externo para obtener información de películas.
- **HTML5 y CSS3** – Estructura y estilos de la aplicación.
- **dotenv** – Gestión de variables de entorno.

## 📁 Estructura del proyecto

```text
Ejercicio_Peliculas_Express_Pug/
│
├── config/
│   └── omdb.js
│
├── controllers/
│   └── films.controller.js
│
├── services/
│   └── films.service.js
│
├── routes/
│   └── films.routes.js
│
├── views/
│   ├── home.pug
│   ├── film.pug
│   └── error.pug
│
├── public/
│   └── css/
│       └── styles.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Acceder a la carpeta del proyecto:

```bash
cd Ejercicio_Peliculas_Express_Pug
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear un archivo `.env` en la raíz del proyecto y configurar la clave de OMDb:

```env
OMDB_API_KEY=tu_clave_api
```

Puedes obtener una clave API gratuita en [OMDb API](https://www.omdbapi.com/apikey.aspx).

5. Iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

También puedes iniciar el servidor con:

```bash
npm start
```

6. Abrir la aplicación en el navegador:

```text
http://localhost:3000
```

## 🛣️ Rutas de la aplicación

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Muestra el formulario de búsqueda. |
| POST | `/film/` | Recibe el título enviado desde el formulario y redirige a la búsqueda. |
| GET | `/film/:title` | Consulta OMDb y muestra los detalles de la película. |

## 🔄 Funcionamiento

1. El usuario accede a la página principal.
2. Introduce el título de una película en el formulario.
3. El formulario envía una petición POST a `/film/`.
4. El controlador recibe el título y redirige a `/film/:title`.
5. El servicio realiza una petición a la API de OMDb.
6. El controlador recibe los datos y los envía a la plantilla `film.pug`.
7. Pug genera el HTML que se muestra en el navegador.

Si la película no se encuentra, se muestra la plantilla `error.pug` con el mensaje correspondiente.

## 🔐 Variables de entorno

La clave de acceso a OMDb se almacena en el archivo `.env`.

**Importante:** el archivo `.env` no debe subirse a GitHub. Se utiliza `.gitignore` para evitar publicar información sensible.

---

## 👨‍💻 Autor

**Erik Buitrago Martín**

Proyecto realizado como ejercicio práctico del Bootcamp de Desarrollo Web Full Stack con IA.