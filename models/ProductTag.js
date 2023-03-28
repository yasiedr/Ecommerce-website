const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  { Id:{
    type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

  },
  product_Id:{
    type: DataTypes.INTEGER, 
    references:{
    Model:"product",
    key:'Id'
    }
  },

    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
