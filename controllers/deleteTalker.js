const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
   const talkers = await readFile('./talker.json', 'utf-8');
  const parsedTalkers = JSON.parse(talkers);

  const talkerFind = parsedTalkers.findIndex((t) => t.id === Number(id));
  delete parsedTalkers[talkerFind];
  const stringfieldTalker = JSON.stringify(parsedTalkers, null, 2);
  await writeFile('./talker.json', stringfieldTalker);
  return res.status(204).end();
} catch (e) {
  next(e);
}
};  