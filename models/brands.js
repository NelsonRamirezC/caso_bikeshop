import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Brands extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    brand_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'brands',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "brands_pkey",
        unique: true,
        fields: [
          { name: "brand_id" },
        ]
      },
    ]
  });
  }
}
