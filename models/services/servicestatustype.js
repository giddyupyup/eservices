'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceStatusType = sequelize.define( 'ServiceStatusType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    name: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }  );

  return ServiceStatusType;
};