/* This file handles "/search" route */

const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// POST request for search
router.post('/', searchController.post);

// GET request to paginate and show search results
router.get('/', searchController.get);

module.exports = router;


const db = require('../config/db');

// Handle search redirection on POST
exports.post = (req, res, next) => {
    let keyword = req.body.keyword;
    let sql = "SELECT * FROM posts";
    if (keyword != "") {
        sql += " WHERE "
    }
}

// Handle rendering of search results on GET
exports.get = (req, res, next) => {
    console.log(req.body);
}