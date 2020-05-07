module.exports = {
    // Check if user is logged as user
    ensureUserAuthenticated: (req, res, next) => {
        if (req.isAuthenticated() && req.user.id) {
            return next();
        }
        req.flash('error', 'Please log in');
        res.redirect('/user/login?redirectUrl=' + req.originalUrl);
    },
    // Check if user is logged as administrator
    ensureAdminAuthenticated: (req, res, next) => {
        if (req.isAuthenticated() && req.user.aid) {
            return next();
        }
        req.flash('error', 'Please log in');
        res.redirect('/admin/login');
    },
    // Check if user is already logged in as user or administrator
    forwardAuthenticated: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return next();
        }
        else {
            if (req.user.id) {
                res.redirect('/user/dashboard');
            }
            else if (req.user.aid) {
                res.redirect('/admin/dashboard');
            }
        }
    }
}