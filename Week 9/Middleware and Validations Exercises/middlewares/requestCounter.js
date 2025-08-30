let requestCount = 0;

function requestCounter(req, res, next) {
  requestCount++;
  req.requestCount = requestCount;
  next();
}

module.exports = { requestCounter };
