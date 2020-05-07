/* This file handles "/products" route */

const express = require('express');
const router = express.Router();
const { ensureUserAuthenticated } = require('../controllers/userAuthenticated');
const salesItemController = require('../controllers/salesItemController');
const postImageUpload = require('../middlewares/postImageUpload');
const postImageCompression = require('../middlewares/postImageCompression')

// GET sales item page
router.get('/:pid', salesItemController.salesItem_get);

// GET request to edit sales item
router.get('/:pid/edit', ensureUserAuthenticated, salesItemController.edit_get);

module.exports = router;