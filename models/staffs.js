import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Staffs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: "NULL"
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stores',
        key: 'store_id'
      }
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'staffs',
        key: 'staff_id'
      }
    }
  }, {
    sequelize,
    tableName: 'staffs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "staffs_pkey",
        unique: true,
        fields: [
          { name: "staff_id" },
        ]
      },
    ]
  });
  }
}
