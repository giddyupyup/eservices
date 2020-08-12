'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable( 'UserTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: Sequelize.DataTypes.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );

    await queryInterface.createTable( 'Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      first_name: Sequelize.DataTypes.STRING,
      last_name: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      contact: Sequelize.DataTypes.STRING,
      address: Sequelize.DataTypes.STRING,
      user_type: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'UserTypes',
            key: 'id'
          },
          allowNull: false
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );

    await queryInterface.createTable( 'Categories', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      category_name: Sequelize.DataTypes.STRING,
      category_description: Sequelize.DataTypes.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );

    await queryInterface.createTable( 'SubCategories', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      category_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Categories',
            key: 'id'
          },
          allowNull: false
        }
      },
      category_name: Sequelize.DataTypes.STRING,
      category_description: Sequelize.DataTypes.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );

    await queryInterface.createTable( 'Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            key: 'id'
          },
          allowNull: false
        }
      },
      service_name: Sequelize.DataTypes.STRING,
      service_description: Sequelize.DataTypes.STRING,
      service_price: Sequelize.DataTypes.FLOAT,
      category_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'SubCategories',
            key: 'id'
          },
          allowNull: false
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );

    await queryInterface.createTable( 'Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      from_user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            key: 'id'
          },
          allowNull: false
        }
      },
      to_user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            key: 'id'
          },
          allowNull: false
        }
      },
      booking_date: Sequelize.DataTypes.DATE,
      booking_price: Sequelize.DataTypes.FLOAT,
      booking_fee: Sequelize.DataTypes.FLOAT,
      service_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Services',
            key: 'id'
          },
          allowNull: false
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );

    await queryInterface.createTable( 'ServiceStatusTypes', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: Sequelize.DataTypes.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );

    await queryInterface.createTable( 'ServiceOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            key: 'id'
          },
          allowNull: false
        }
      },
      service_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Services',
            key: 'id'
          },
          allowNull: false
        }
      },
      service_qty: Sequelize.DataTypes.INTEGER,
      service_price: Sequelize.DataTypes.FLOAT,
      service_status: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'ServiceStatusTypes',
            key: 'id'
          },
          allowNull: false
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    } );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable( 'UserTypes' );
    await queryInterface.dropTable( 'Users' );
    await queryInterface.dropTable( 'Bookings' );
    await queryInterface.dropTable( 'Services' );
    await queryInterface.dropTable( 'ServiceStatusTypes' );
    await queryInterface.dropTable( 'ServiceOrders' );
    await queryInterface.dropTable( 'Categories' );
    await queryInterface.dropTable( 'SubCategories' );
  }
};
