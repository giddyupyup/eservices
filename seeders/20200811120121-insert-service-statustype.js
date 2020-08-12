'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert( 'ServiceStatusTypes', [
      {
        id: 1,
        name: 'Pending',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Ongoing',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Done',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        name: 'Cancelled',
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
    await queryInterface.bulkDelete( 'ServiceStatusTypes', null, {} );
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
