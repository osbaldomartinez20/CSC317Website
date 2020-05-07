const db = require('../config/db');

// Show sales item page on GET
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

// Show sell page for revising sales item on GET
exports.edit_get = (req, res, next) => {
    let productId = req.params.pid;
    let seller = req.user.id;

    // Retrieve information of a sales item that is being sold by the logged in user
    let sql = "SELECT *, CAST(price AS CHAR) AS price FROM SalesItems WHERE pid = ? AND seller = ?;";

    // Retrieve information of all courses
    sql += "SELECT * FROM Courses;";

    // Retrieve all pick up locations of a sales item
    sql += "SELECT * FROM PickupLocations WHERE product = ?;"

    placeholders = [productId, seller, productId];

    db.query(sql, placeholders, (err, result) => {
        if (err) {
            res.render('error');
        }

        if (typeof result[0][0] == 'undefined') {
            res.render('error');
        }
        else {
            // Intepret and display newline
            result[0][0].description = result[0][0].description.replace(/<br>/g, "\n");

            res.render('sell', {
                salesItem: result[0][0],
                course: result[1],
                pickupLocation: result[2],
                reviseMode: true
            });
        }
    });
}