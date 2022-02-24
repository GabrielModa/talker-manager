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

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker',
 controllers.listTalkers);

app.get('/talker/:id', 
controllers.getTalkerById);

app.post('/login',
 validateLogin,
 controllers.createLogin);

 app.post('/talker',
 middleware.validateToken,
 controllers.createTalker);

app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
