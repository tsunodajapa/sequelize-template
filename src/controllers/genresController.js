const genreModel = require('../database/entities/Genre');

const genresController = {
  index: async (request, response) => {
    const genres = await genreModel.findAll();
    return response.json(genres);
  },
  show: async (request, response) => {
    const { id } = request.params;
    const genre = await genreModel.findByPk(id);

    return response.json(genre);
  },
};

module.exports = genresController;
