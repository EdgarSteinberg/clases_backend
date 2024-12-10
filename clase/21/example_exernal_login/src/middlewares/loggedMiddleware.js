export default function logged(req, res, next) {
    if (req.session.user) {
        return res.redirect("/")
    }
    next();
}