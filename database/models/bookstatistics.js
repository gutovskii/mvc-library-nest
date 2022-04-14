'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookStatistics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookStatistics.belongsTo(models.Book);
    }
  }
  BookStatistics.init({
    clicked: DataTypes.INTEGER,
    wishful: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookStatistics',
    createdAt: false,
    updatedAt: false
  });
  return BookStatistics;
};