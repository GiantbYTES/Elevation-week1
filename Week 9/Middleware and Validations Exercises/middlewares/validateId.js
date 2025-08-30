function idValidation(req, res, next) {
  console.log("idValidation");
  const id = req.params.id ? Number(req.params.id) : undefined;
  if (id && Number.isInteger(id)) {
    next();
  } else {
    return res.status(404).json({ error: "'id' must be an Integer" });
  }
}

module.exports = { idValidation };
