const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { name = '' } = req.query;

    const talkers = await readFile('./talker.json',
    'utf-8');
    const parsedTalkers = JSON.parse(talkers);

    const searchByName = parsedTalkers
    .filter((t) => t.name.toLowerCase().includes() === name.toLowerCase().includes());
    return res.status(200).json(searchByName);
  } catch (e) {
    next(e);
  }
};