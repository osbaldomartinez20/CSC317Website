const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

// Handle showing sell page on GET
exports.imagePost_get = (req, res, next) => {
    res.render('imagePost');
}

// Handle submitting sales item for sell on POST
exports.imagePost_post = (req, res, next) => {
    let productId = uuidv4();
    let { title, description, terms } = req.body;
    let seller = req.user.id;
    let postImage = req.file.filename;
    let postError = [];
    

    // Intepret and store newline for description
    description = description.replace(/\r\n|\r|\n/g, "<br>");

    // Check if required fields are filled
    if (!title || !description) {
        postError.push({ message: 'Please fill in all fields' });
    }
    // Check if terms and conditions is checked
    else if (!terms) {
        postError.push({ message: 'Please indicate that you agree to the terms and conditions.' });
    }
    //Check if there is image 
    else if (!postImage || postImage == undefined) {
        postError.push({ message: 'Please select an image.' });
    }

    // Render posting error messages if necessary
    if (postError.length > 0) {
        res.render('imagePost', {
            postError: postError
        });
    }

    let sql = "INSERT INTO posts (pid, title, description, user, filename) VALUES (?,?,?,?,?)";

    db.query(sql, [productId, title, description, seller, postImage], (err, result) => {
        if (err) {
            req.flash('error', 'Error listing item');
            res.render('imagePost');
        }

        if ((typeof result !== 'undefined')) {
            req.flash('success', 'Successfully listed item for sale');
            res.redirect('/user/dashboard');
        }
        else {
            req.flash('error', 'Error listing item');
            res.redirect('/post');
        }
    });
}
