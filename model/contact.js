const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Contact = sequelize.define('Contact', {
  contact_id: {
    type: DataTypes.STRING(250),
    primaryKey: true,
  },
  account_id: DataTypes.STRING(250),
  account_name: DataTypes.STRING(250),
  department: DataTypes.STRING(250),
  last_name: DataTypes.STRING(250),
  first_name: DataTypes.STRING(250),
  address_id: DataTypes.STRING(250),
  shipping_id: DataTypes.STRING(250),
  work_phone: DataTypes.STRING(250),
  email: DataTypes.STRING(250),
  account_manager_id: DataTypes.STRING(250),
  status: DataTypes.STRING(250),
  estimator: DataTypes.STRING(250)
}, {
//   tableName: 'Contact',
  timestamps: false,
});

module.exports = Contact;
