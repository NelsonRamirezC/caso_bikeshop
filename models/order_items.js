import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class OrderItems extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'product_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    list_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'order_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_items_pkey",
        unique: true,
        fields: [
          { name: "order_id" },
          { name: "item_id" },
        ]
      },
    ]
  });
  }
}
