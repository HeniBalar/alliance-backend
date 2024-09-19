const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Account = sequelize.define('Account', {
  account_id: {
    type: DataTypes.STRING(250),
    primaryKey: true,
  },
  account_type: DataTypes.STRING(250),
  account_name: DataTypes.STRING(250),
  address_id: DataTypes.STRING(250),
  shipping_id: DataTypes.STRING(250),
  phone: DataTypes.STRING(250),
  email: DataTypes.STRING(250),
  url: DataTypes.STRING(250),
  industry: DataTypes.STRING(250),
  account_manager: DataTypes.STRING(250),
  customer_id: DataTypes.STRING(250),
  import_source: DataTypes.STRING(250),
  branch_name: DataTypes.STRING(250),
}, {
  // tableName: 'Account',
  timestamps: false,
});

module.exports = Account;
