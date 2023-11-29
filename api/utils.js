function requireUser(req, res, next) {
    const auth = req.header('Authorization');
    if (!req.user) {
      next({
        name: "MissingUserError ",
        message: "Please log in to perform this action."
      });
    }

    next();
}

module.exports = {
  requireUser
}