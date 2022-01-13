const express = require('express');
const app = express()

app.use(bodyParser.json())

app.get('/ping', function(req, res) {
  res.status(200).json({ message: 'pong'})
})

app.post('/hello', function (req, res) {
  const { name } = req.body;

  if (!name) return res.status(404).json({ message: 'Invalid Data'});

  res.status(200).json({ message: `Hello, ${name}`})
})

app.post('/greetind', function (req, res) {
  const { name, age } = req.body;

  if (age < 17) return res.status(401).json({ message: "Unauthorized"})

  res.status(200).json({ message: `Hello, ${name}`})
})

app.put('/users/:name/:age', function (req, res) {
  const {name, age} = req.params;

  if (!name || age === -1) return res.status(404).json({ message: 'Invalid data!'});

  res.status(200).json({ message: `Seu nome é ${name} e voce tem ${age} anos de idade`})
})

app.listen('3001', () => {
  console.log('Ouvindo na porta 3001!')
})