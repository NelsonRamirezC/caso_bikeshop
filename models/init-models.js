import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Brands from  "./brands.js";
import _Categories from  "./categories.js";
import _Customers from  "./customers.js";
import _OrderItems from  "./order_items.js";
import _Orders from  "./orders.js";
import _Products from  "./products.js";
import _Staffs from  "./staffs.js";
import _Stocks from  "./stocks.js";
import _Stores from  "./stores.js";

export default function initModels(sequelize) {
  const Brands = _Brands.init(sequelize, DataTypes);
  const Categories = _Categories.init(sequelize, DataTypes);
  const Customers = _Customers.init(sequelize, DataTypes);
  const OrderItems = _OrderItems.init(sequelize, DataTypes);
  const Orders = _Orders.init(sequelize, DataTypes);
  const Products = _Products.init(sequelize, DataTypes);
  const Staffs = _Staffs.init(sequelize, DataTypes);
  const Stocks = _Stocks.init(sequelize, DataTypes);
  const Stores = _Stores.init(sequelize, DataTypes);

  Products.belongsToMany(Stores, { as: 'tiendas', through: Stocks, foreignKey: "product_id", otherKey: "store_id" });
  Stores.belongsToMany(Products, { as: 'productos', through: Stocks, foreignKey: "store_id", otherKey: "product_id" });
  Products.belongsTo(Brands, { as: "brand", foreignKey: "brand_id"});
  Brands.hasMany(Products, { as: "products", foreignKey: "brand_id"});
  Products.belongsTo(Categories, { as: "category", foreignKey: "category_id"});
  Categories.hasMany(Products, { as: "products", foreignKey: "category_id"});
  Orders.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(Orders, { as: "orders", foreignKey: "customer_id"});
  OrderItems.belongsTo(Orders, { as: "order", foreignKey: "order_id"});
  Orders.hasMany(OrderItems, { as: "order_items", foreignKey: "order_id"});
  OrderItems.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(OrderItems, { as: "order_items", foreignKey: "product_id"});
  Stocks.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(Stocks, { as: "stocks", foreignKey: "product_id"});
  Orders.belongsTo(Staffs, { as: "staff", foreignKey: "staff_id"});
  Staffs.hasMany(Orders, { as: "orders", foreignKey: "staff_id"});
  Staffs.belongsTo(Staffs, { as: "manager", foreignKey: "manager_id"});
  Staffs.hasMany(Staffs, { as: "staffs", foreignKey: "manager_id"});
  Orders.belongsTo(Stores, { as: "store", foreignKey: "store_id"});
  Stores.hasMany(Orders, { as: "orders", foreignKey: "store_id"});
  Staffs.belongsTo(Stores, { as: "store", foreignKey: "store_id"});
  Stores.hasMany(Staffs, { as: "staffs", foreignKey: "store_id"});
  Stocks.belongsTo(Stores, { as: "store", foreignKey: "store_id"});
  Stores.hasMany(Stocks, { as: "stocks", foreignKey: "store_id"});

  return {
    Brands,
    Categories,
    Customers,
    OrderItems,
    Orders,
    Products,
    Staffs,
    Stocks,
    Stores,
  };
}
