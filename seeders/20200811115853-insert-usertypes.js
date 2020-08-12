'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert( 'UserTypes', [
      {
        name: 'Users',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Service Providers',
        created_at: new Date(),
        updated_at: new Date()
      }
    ] );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete( 'UserTypes', null, {} );
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
