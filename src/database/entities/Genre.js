const { DataTypes } = require('sequelize');
const sequelize = require('..');

const Genre = sequelize.define(
  'Genre',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    ranking: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'genres',
    timestamps: false,
  },
);

module.exports = Genre;
