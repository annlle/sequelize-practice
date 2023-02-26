'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Power.init({
    superPower:{
      field: 'super_power',
      allowNull: false,
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    description:{
      type: DataTypes.TEXT
    }

  }, {
    sequelize,
    modelName: 'Power',
    tableName: 'powers',
    underscored: true
  });
  return Power;
};