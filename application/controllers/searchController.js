const db = require('../config/db');

// Handle search redirection on POST
exports.post = (req, res, next) => {
    let keyword = req.body.keyword;
    let sql = "SELECT * FROM posts";
    let placeholders = [];
    let dataPassed = [];
    let criteria = {};

    if (keyword != "") {
        sql += " WHERE (title LIKE ? OR description LIKE ?)";
        placeholders = ['%' + keyword + '%', '%' + keyword + '%'];
        criteria.keyword = keyword;
    }

    db.query(sql,placeholders, (err, result) => {
        if (err) {
            req.flash('error', 'There was an internal error.');
            res.redirect('/error');
        }

        let totalResults = result.length;

        for(let i = 0; i < totalResults; i++) {
            dataPassed.push(result[i]);
        }

        res.render('results', {
            post: dataPassed,
            total: totalResults,
            searchCriteria: criteria
        });
    });
}

// Handle random image search
exports.randomImage = (req, res) => {
    let sql = "SELECT pid FROM posts ORDER BY RAND() LIMIT 1;";

    db.query(sql, [], (err, result) => {
        if (err) {
            req.flash('error', 'There was an internal error.');
            res.redirect('/error');
        }
        const iid = result[0].pid;
        res.redirect('/imageCard/' + iid + '');
    });
}