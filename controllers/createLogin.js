const crypto = require('crypto');

module.exports = (req, res, next) => {
  try {
    const randomID = crypto.randomBytes(8).toString('hex');

    return res.status(200).json({ token: randomID });
  } catch (e) {
    next(e);
  } 
};      