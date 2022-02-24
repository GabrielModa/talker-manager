module.exports = (req, res, next) => {
  console.log(req.headers);
 const { authorization } = req.headers;
//  const { token } = req.body;
try {
 if (!authorization) return res.status(401).json({ message: 'Token não encontrado' }); 
 if (authorization.length !== 16) return res.status(401).json({ message: 'Token inválido' });
 
 return next();
} catch (e) {
  next(e);
}
};