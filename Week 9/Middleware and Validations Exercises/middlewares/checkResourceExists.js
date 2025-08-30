// Middleware factory that takes resources and returns the middleware
const checkResourceExists = (resources) => (req, res, next) => {
  const id = req.params.id;
  const resource = resources.find((r) => r.id == id);
  if (!resource) {
    return res.status(404).json({ error: "Resource not found" });
  }
  next();
};

module.exports = checkResourceExists;
