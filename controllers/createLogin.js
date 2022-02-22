const crypto = require('crypto');

console.log(crypto.randomBytes(8).toString('hex')); 

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const randomID = crypto.randomBytes(8).toString('hex');

    if (email && password) return res.status(200).json({ token: randomID });
    return next();
  } catch (e) {
    next(e);
  }
};