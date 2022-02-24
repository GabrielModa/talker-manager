module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;

    if (!talk.rate) {
      return res.status(400).json({ message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    // if (parseInt(talk.rate, 10) >= 1 && parseInt(talk.rate, 10) <= 5) {
    //   return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    // }
    return next();
  } catch (e) {
    next(e);
  }
};