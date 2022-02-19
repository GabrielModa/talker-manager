const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => { 
try {
  const { id } = req.params;

  const talkers = await readFile('./talker.json', 'utf-8');
  const parsedTalkers = JSON.parse(talkers);

  const talkerFind = parsedTalkers.find((t) => t.id === Number(id));
  if (!talkerFind) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  
  return res.status(200).json(talkerFind);    
} catch (e) {
  return next(e);
}
};