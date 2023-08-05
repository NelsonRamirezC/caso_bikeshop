import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Stores extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    store_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: "NULL"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    state: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "NULL"
    },
    zip_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "NULL"
    }
  }, {
    sequelize,
    tableName: 'stores',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stores_pkey",
        unique: true,
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
  }
}
