const express = require('express');
const bodyParser = require('body-parser');

const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

app.get('/open', function (req, res) {
  res.send('open!')
});

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });