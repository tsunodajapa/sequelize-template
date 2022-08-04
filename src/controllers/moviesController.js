const { Op } = require('sequelize');
const movieModel = require('../database/entities/Movie');

const moviesController = {
  index: async (request, response) => {
    const movies = await movieModel.findAll();

    return response.json(movies);
  },
  show: async (request, response) => {
    const { id } = request.params;

    const movie = await movieModel.findByPk(id);

    return response.json(movie);
  },
  new: async (request, response) => {
    const movies = await movieModel.findAll({
      order: [['release_date', 'DESC']],
      limit: 5,
    });

    return response.json(movies);
  },
  recomended: async (request, response) => {
    const movies = await movieModel.findAll({
      where: {
        rating: { [Op.gte]: 8 },
      },
      order: [['rating', 'DESC']],
    });

    return response.json(movies);
  },
};

module.exports = moviesController;
