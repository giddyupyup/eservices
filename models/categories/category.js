'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define( 'Category', {
    category_name: DataTypes.STRING,
    category_description: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }  );

  return Category;
};