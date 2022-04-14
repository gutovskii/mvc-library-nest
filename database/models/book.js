'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsToMany(models.Author, { through: 'BookAuthor' });
      Book.hasOne(models.BookStatistics);
      Book.hasOne(models.BookImage);
    }
  }
  Book.init({
    title: DataTypes.STRING,
    year_of_publication: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
    underscored: true
  });
  return Book;
};