/* This file handles "/post" route */

const express = require('express');
const router = express.Router();
const { ensureUserAuthenticated } = require('../controllers/userAuthenticated');
const imagePostController = require('../controllers/imagePostController');
const postImageUpload = require('../middlewares/postImageUpload');
const postImageCompression = require('../middlewares/postImageCompression')

// GET sell page
router.get('/', imagePostController.imagePost_get);

// POST request for sell page
router.post('/', ensureUserAuthenticated, postImageUpload.single("postImage"), postImageCompression, imagePostController.imagePost_post);

module.exports = router;