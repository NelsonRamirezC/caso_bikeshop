import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Stocks extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stores',
        key: 'store_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'product_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stocks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stocks_pkey",
        unique: true,
        fields: [
          { name: "store_id" },
          { name: "product_id" },
        ]
      },
    ]
  });
  }
}
