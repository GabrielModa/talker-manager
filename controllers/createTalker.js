const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
try {
  const { name, age, talk } = req.body;
  
  const talkers = await readFile('./talker.json', 'utf-8');
  const parsedTalkers = JSON.parse(talkers);
  
  const newTalker = { name, age, id: parsedTalkers.length + 1, talk };
  
  parsedTalkers.push(newTalker);
  
  const stringfieldTalker = JSON.stringify(parsedTalkers, null, 2);

  await writeFile('./talker.json', stringfieldTalker);

  return res.status(201).json(newTalker);
} catch (e) {
  return next(e);
}
};
