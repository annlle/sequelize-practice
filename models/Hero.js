'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hero.init({
    nick:{
      allowNull:false,
      unique:true,
      type: DataTypes.STRING,
      validate:{
        notEmpty:true,
      }
    },
    realName:{
      field: 'real_name',
      allowNull:false,
      unique:true, 
      type: DataTypes.STRING,
      validate:{
        notEmpty:true,
      }
    },
    originDescription:{
      field: 'origin_description',
      allowNull:false,
      unique:true, 
      type: DataTypes.TEXT,
      validate:{
        notEmpty:true,
      }
    },
    cathPhrase:{
      field: 'cath_phrase', 
      type:DataTypes.TEXT
    },
    image: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
  });
  return Hero;
};