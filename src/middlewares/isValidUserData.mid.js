// src/middlewares/isValidUserData.mid.js
export default (req, res, next) => {
  const { name, email } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ message: 'Invalid or missing name' });
  }
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Invalid or missing email' });
  }
  next();
};