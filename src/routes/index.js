const { Router } = require('express');

const moviesRoutes = require('./movies.routes');
const genresRoutes = require('./genres.routes');

const routes = Router();

routes.use(moviesRoutes);
routes.use(genresRoutes);

module.exports = routes;
