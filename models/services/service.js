'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define( 'Service', {
    service_name: DataTypes.STRING,
    service_description: DataTypes.STRING,
    service_price: DataTypes.FLOAT
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }  );

  Service.associate = ( models ) => {
    Service.belongsTo( models.User, { foreignKey: 'user_id' } );
  }

  return Service;
};