function isValidData(req, res, next) {
  
      // src/middlewares/isValidData.mid.js
    module.exports = (req, res, next) => {
      try {
        const { title, stock, price } = req.body;
        if (!title || !stock || !price) {
          const error = new Error("Title, stock, and price are required");
          error.statusCode = 400;
          throw error;
        } else {
          return next();
        }
      } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
      }
    };
}

export default isValidData;
