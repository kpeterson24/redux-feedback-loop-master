const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST router for DB to take in data
router.post('/', (req, res) => {
    const newFormData = req.body;
    const sqlText = `INSERT INTO prime-feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    // send SQL query to data to create a new instance within our DB "prime-feedback."
    pool.query(sqlText, [newFormData.feeling, newFormData.understanding, newFormData.support,newFormData.comments])
    .then((result) => {
    console.log('Added your new feedback form data to DB', newFormData);
    res.sendStatus(201);
    })
    .catch((error) => {
    console.log('Error adding new form data to DB', error);
    res.sendStatud(500);
    })
    
})

module.exports = router;