import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Products extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brands',
        key: 'brand_id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'category_id'
      }
    },
    model_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    list_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
  }
}
