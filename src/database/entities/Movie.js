const { DataTypes } = require('sequelize');
const sequelize = require('..');

const Movie = sequelize.define(
  'Movie',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'movies',
    timestamps: false,
  },
);

module.exports = Movie;
