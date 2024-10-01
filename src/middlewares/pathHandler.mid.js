function pathHandler(req, res, next) {
  const { url, method } = req
  const message = `${method} ${url} NOT FOUND`
  return res.status(404).json({ message });
}

// src/middlewares/pathHandler.mid.js
export default (req, res, next) => {
  res.status(404).json({ message: 'Path not found' });
};
