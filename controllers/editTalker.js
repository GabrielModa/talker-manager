const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
try {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const talkers = await readFile('./talker.json', 'utf-8');
  const parsedTalkers = JSON.parse(talkers);

  const editTalker = { name, age, id: Number(req.params.id), talk };
  const talkerFind = parsedTalkers.find((t) => t.id === Number(id));
  parsedTalkers.push(editTalker);

  const stringfieldTalker = JSON.stringify(parsedTalkers, null, 2);
  await writeFile('./talker.json', stringfieldTalker);
  if (talkerFind) return res.status(200).json(editTalker);
  next();
} catch (e) {
  next(e);
}
};