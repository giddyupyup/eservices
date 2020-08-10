'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo( models.User, { foreignKey: 'from_user_id' } );
      Booking.belongsTo( models.User, { foreignKey: 'to_user_id' } );
      Booking.belongsTo( models.Service, { foreignKey: 'service_id' } );
    }
  }
  Booking.init({
    booking_date: DataTypes.DATE,
    booking_price: DataTypes.FLOAT,
    booking_fee: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Booking',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Booking;
};