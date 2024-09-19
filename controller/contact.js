const express = require('express');
const router = express.Router();
const Contact = require('../model/contact');

router.get('/get-All', async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (err) {
        console.error('Error fetching contacts:', err);
        res.status(500).send({ error: 'Error fetching contacts' });
    }
});

module.exports = router;
