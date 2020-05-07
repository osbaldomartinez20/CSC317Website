/* This file handles "/products" route */

const express = require('express');
const router = express.Router();
const { ensureUserAuthenticated } = require('../controllers/userAuthenticated');
const salesItemController = require('../controllers/salesItemController');
const postImageUpload = require('../middlewares/postImageUpload');
const postImageCompression = require('../middlewares/postImageCompression')
const inquiryController = require('../controllers/inquiryController');

// GET sales item page
router.get('/:pid', salesItemController.salesItem_get);

// GET request to edit sales item
router.get('/:pid/edit', ensureUserAuthenticated, salesItemController.edit_get);

// POST request to edit sales item
router.post('/:pid/edit', ensureUserAuthenticated, postImageUpload.single('postImage'), postImageCompression, salesItemController.edit_post);

// GET request to end listing of sales item
router.get('/:pid/end', ensureUserAuthenticated, salesItemController.end);

// GET request to relist sales item
router.get('/:pid/relist', ensureUserAuthenticated, salesItemController.relist);

// GET contact seller page 
router.get('/:pid/inquiry', ensureUserAuthenticated, inquiryController.get);

// POST request to send message in contact seller page
router.post('/:pid/inquiry', ensureUserAuthenticated, inquiryController.post);

module.exports = router;