const Book = (sequelize, DataTypes) => sequelize.define('Book', {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  pageQuantity: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
}, { timestamps: false });

module.exports = Book;
