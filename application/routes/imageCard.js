/* This file handles "/products" route */

const express = require('express');
const router = express.Router();
const { ensureUserAuthenticated } = require('../controllers/userAuthenticated');
const imageCardController = require('../controllers/imageCardController');

// GET sales item page
router.get('/:pid', imageCardController.imageCard_get);

// GET request to edit sales item
router.get('/:pid/edit', ensureUserAuthenticated, imageCardController.edit_get);

module.exports = router;