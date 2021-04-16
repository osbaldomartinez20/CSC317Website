/* This file handles "/post" route */

const express = require('express');
const router = express.Router();
const { ensureUserAuthenticated } = require('../controllers/userAuthenticated');
const imagePostController = require('../controllers/imagePostController');
const postImageUpload = require('../middlewares/postImageUpload');

// GET sell page
router.get('/', ensureUserAuthenticated, imagePostController.imagePost_get);

// POST request for sell page
router.post('/', ensureUserAuthenticated, postImageUpload.single("postImage"), imagePostController.imagePost_post);

module.exports = router;