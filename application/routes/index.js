/* This file handles "/" route */

const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET home page
router.get('/', (req, res) => {
    let sql = "SELECT * FROM posts ORDER BY date DESC";
    let dataPassed = [];
    db.query(sql, (err, result) => {
        if (err) throw err;

        if (result.length > 6) {
            for (let i = 0; i < 6; i++) {
                dataPassed.push(result[i]);
            }
        } else {
            for (let i = 0; i < result.length; i++) {
                dataPassed.push(result[i]);
            }
        }
        res.render('home', {
            newPost: dataPassed
        });
    });
});

module.exports = router;