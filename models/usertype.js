'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define( 'UserType', {
    name: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  } );

  return UserType;
};