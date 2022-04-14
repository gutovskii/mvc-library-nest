'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookImage.belongsTo(models.Book);
    }
  }
  BookImage.init({
    fileName: DataTypes.STRING,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookImage',
    createdAt: false,
    updatedAt: false
  });
  return BookImage;
};