const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

// Handle showing sell page on GET
exports.imagePost_get = (req, res, next) => {
    res.render('imagePost');
}

// Handle submitting sales item for sell on POST
exports.imagePost_post = (req, res, next) => {
    const productId = uuidv4();
    const { title, description, terms } = req.body;
    const userid = req.user.id;
    const postImage = req.file.filename;
    let postError = [];

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


    db.query("SELECT * FROM users WHERE id = ?", userid, (err1, result1) => {
        const user = result1[0].username;

        const sql = "INSERT INTO posts (pid, title, description, userid, filename, user) VALUES (?,?,?,?,?,?)";

        db.query(sql, [productId, title, description, userid, postImage, user], (err, result) => {
            if (err) {
                req.flash('error', 'Error posting image');
                res.render('imagePost');
            }

            if ((typeof result !== 'undefined')) {
                req.flash('success', 'Successfully posted an image');
                res.redirect('/user/dashboard');
            }
            else {
                req.flash('error', 'Error posting image');
                res.redirect('/post');
            }
        });
    });
    
}
