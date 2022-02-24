const { v4: uuid } = require('uuid');

const authorization = uuid();
console.log(authorization);

module.exports = (req, res, next) => {
 const { token } = req.body;
console.log(token);
try {
  if (!token) return res.status(401).json({ message: 'Token não encontrado' });
  if (typeof token === 'string') return res.status(401).json({ message: 'Token inválido' });
} catch (e) {
  next(e);
}
};