/* This file handles "/search" route */

const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// POST request for search
router.post('/', searchController.post);

//POST request for a random image
router.post('/random', searchController.randomImage)

module.exports = router;