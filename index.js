const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const middleware = require('./middleware');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const validateLogin = [
  middleware.validatePassword,
  middleware.validateEmail,
]; 

const validateTalker = [
  middleware.validateToken,
  middleware.validateName,
  middleware.validateAge,
  middleware.validateTalk,
  middleware.validateWatchedAt,
  middleware.validateRate,
];

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login',
 validateLogin,
 controllers.createLogin);

app.get('/talker',
 controllers.listTalkers);
 
 app.post('/talker',
  validateTalker,
 controllers.createTalker);

app.get('/talker/:id', 
controllers.getTalkerById);

app.put('/talker/:id',
validateTalker,
controllers.editTalker);

app.delete('/talker/:id',
middleware.validateToken,
controllers.deleteTalker);

app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
