module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;

    const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if (!talk.watchedAt) {
 res.status(400).json(
      { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
); 
}
    if (!regexDate.test(talk.watchedAt)) { 
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }

    return next();
  } catch (e) {
    next(e);
  }
};