'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nick: {
        allowNull:false,
        unique:true,
        type: Sequelize.STRING
      },
      realName: {
        field: 'real_name',
        allowNull:false,
        unique:true,
        type: Sequelize.STRING
      },
      originDescription: {
        field: 'origin_description',
        allowNull:false,
        unique:true, 
        type: Sequelize.TEXT
      },
/*      superPower: {
        field: 'super_power',
        type: Sequelize.INTEGER,
        references:{
          model:{ 
            tableName: 'powers',
            key: 'id'
          }
        }
      },*/
      cathPhrase: {
        field: 'cath_phrase', 
        type: Sequelize.TEXT
      },
    /*  image: {
        type: Sequelize.TEXT
      },*/
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  }
};