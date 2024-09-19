const express = require('express');
const router = express.Router();
const Account = require('../model/account');
const { Op } = require('sequelize');

router.get('/get-All', async (req, res) => {
    try {
        const accounts = await Account.findAll();
        res.status(200).json(accounts);
    } catch (err) {
        console.error('Error fetching accounts:', err);
        res.status(500).send({ error: 'Error fetching accounts' });
    }
});

router.get('/searchAccounts', async (req, res) => {
    try {
        const { searchTerm } = req.query;
        if (!searchTerm) {
            return res.status(400).send({ error: 'No search term provided' });
        }
        const accounts = await Account.findAll({
            where: {
                account_name: {
                    [Op.like]: `%${searchTerm}%`,
                }
            }
        });

        res.status(200).json(accounts);
    } catch (err) {
        console.error('Error searching accounts:', err);
        res.status(500).send({ error: 'Error searching accounts' });
    }
});

module.exports = router;
