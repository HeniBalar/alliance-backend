const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const FormData = sequelize.define('form_data', {
    estimator: DataTypes.TEXT,
    proposal: DataTypes.TEXT,
    job_walkDate: DataTypes.STRING,
    job_walkTime: DataTypes.STRING,
    job_name: DataTypes.STRING,
    job_address: DataTypes.STRING,
    job_city: DataTypes.STRING,
    job_state: DataTypes.STRING,
    job_zip: DataTypes.STRING,
    job_email: DataTypes.STRING,
    job_contact: DataTypes.STRING,
    job_phone: DataTypes.STRING,
    customer_name: DataTypes.STRING,
    customer_claim: DataTypes.STRING,
    customer_po: DataTypes.STRING,
    customer_address: DataTypes.STRING,
    customer_city: DataTypes.STRING,
    customer_state: DataTypes.STRING,
    customer_zip: DataTypes.STRING,
    customer_phone: DataTypes.STRING,
    customer_email: DataTypes.STRING,
    customer_contact: DataTypes.STRING,
    customer_cell: DataTypes.STRING,
    owner_name: DataTypes.STRING,
    owner_address: DataTypes.STRING,
    owner_city: DataTypes.STRING,
    owner_state: DataTypes.STRING,
    owner_zip: DataTypes.STRING,
    owner_phone: DataTypes.STRING,
    owner_email: DataTypes.STRING,
    owner_contact: DataTypes.STRING,
    owner_cell: DataTypes.STRING,
    referral_name: DataTypes.STRING,
    referral_address: DataTypes.STRING,
    referral_city: DataTypes.STRING,
    referral_state: DataTypes.STRING,
    referral_zip: DataTypes.STRING,
    referral_phone: DataTypes.STRING,
    referral_email: DataTypes.STRING,
    referral_contact: DataTypes.STRING,
    referral_cell: DataTypes.STRING,
    ac_name1: DataTypes.STRING,
    ac_company1: DataTypes.STRING,
    ac_phone1: DataTypes.STRING,
    ac_email1: DataTypes.STRING,
    ac_testing_cmp1 : DataTypes.TEXT,
    ac_name2: DataTypes.STRING,
    ac_company2: DataTypes.STRING,
    ac_phone2: DataTypes.STRING,
    ac_email2: DataTypes.STRING,
    ac_testing_cmp2 : DataTypes.TEXT,
    ac_name3: DataTypes.STRING,
    ac_company3: DataTypes.STRING,
    ac_phone3: DataTypes.STRING,
    ac_email3: DataTypes.STRING,
    ac_testing_cmp3 : DataTypes.TEXT,
    scope_work: DataTypes.TEXT,
    customer_type: DataTypes.STRING,
    job_and_work_type: DataTypes.STRING,
    epa_id: DataTypes.STRING,
    haz_manifest: DataTypes.TEXT,
    non_haz_man: DataTypes.TEXT,
    non_haz_man_1pr: DataTypes.TEXT,
    trash: DataTypes.STRING,
    project_type: DataTypes.STRING,
    building_size: DataTypes.STRING,
    number_of_floors: DataTypes.STRING,
    building_age: DataTypes.STRING,
    no_of_dwelling_units: DataTypes.STRING,
    present_prior_use: DataTypes.STRING,
    procedure: DataTypes.STRING,
    survey: DataTypes.TEXT,
    contract_amount: DataTypes.STRING,
    lock_box_combo: DataTypes.STRING,
    instruction_notes: DataTypes.TEXT,
},
    {
    //   tableName: 'form_data',
      timestamps: false
    }
);

module.exports = FormData;
