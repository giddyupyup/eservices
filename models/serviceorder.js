'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ServiceOrder.belongsTo( models.User, { foreignKey: 'user_id' } );
      ServiceOrder.belongsTo( models.Service, { foreignKey: 'service_id' } );
      ServiceOrder.belongsTo( models.ServiceStatusType, { foreignKey: 'service_status' } );
    }
  }
  ServiceOrder.init({
    service_qty: DataTypes.INTEGER,
    service_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ServiceOrder',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return ServiceOrder;
};