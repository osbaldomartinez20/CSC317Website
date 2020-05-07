const db = require('../config/db');

// Show image page on GET
exports.imageCard_get = (req, res, next) => {
    let imageId = req.params.pid;

    let sql = "SELECT * FROM posts WHERE pid = ?";
    let objToBePassed = {};

    db.query(sql, imageId, (err, result) => {
        if (err) {
            res.render('error');
        }
        objToBePassed = result;

        // Item found
        if (result.length !== 0) {
            res.render('imageCard', {
                data: objToBePassed
            });
        }
        // Item not found
        else {
            res.render('error');
        }
    });
}

// Show image page for revising image on GET
exports.edit_get = (req, res, next) => {
    let productId = req.params.pid;
    let user = req.user.id;

    let dataPassed = [];

    let sql = "SELECT * FROM posts WHERE pid = ?";

    db.query(sql, productId, (error, result) => {
        if (error) throw error;

        if (user != result[0].userid) {
            req.flash('error', 'Not the owner of the post.');
            res.redirect('/user/dashboard');
        }
        dataPassed = result[0];
        if (dataPassed.description != null) {
            dataPassed.description = dataPassed.description.replace(/<br>/g, "\n");
        }

        res.render('editImage', {
            values: dataPassed
        });
    });
}

//submits edits to the tilte and description
exports.edit_post = (req, res, next) => {
    let { title, description } = req.body;
    let pid = req.params.pid;
    let user = req.user.id;

    let sql = "SELECT * FROM posts WHERE pid = ?";

    console.log(req.body);

    db.query(sql, [pid], (error, result) => {
        if (error) throw error;
        if (user != result[0].userid) {
            req.flash('error', 'Not the owner of the post.');
            res.redirect('/user/dashboard');
        }

        sql = "UPDATE posts SET title = ?, description = ? WHERE pid = ?";
        db.query(sql, [title, description, pid], (error2, result2) => {
            if (error2) throw error2;

            req.flash('success', 'Updated Post Information.');
            res.redirect('/user/dashboard');
        });
    });
}