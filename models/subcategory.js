'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubCategory.belongsTo( models.Category, { foreignKey: 'category_id' } );
      SubCategory.hasOne( models.Service, { foreignKey: 'category_id' } );
    }
  }
  SubCategory.init({
    category_name: DataTypes.STRING,
    category_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SubCategory',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return SubCategory;
};