const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) || r.price >= parseInt(minPrice));
  res.status(200).json(filteredRecipes);
})


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const {id, name, price} = req.body
  recipes.push({id,name, price});
  res.status(201).json({message: 'Recipe created successfully'})
})


app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

fetch('http://localhost:3001/recipes/', {
  method: 'POST',
  headers: {
    Aceept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});

app.put('/recipes/:id', function(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({message: 'Recipe not found'});

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();

});

fetch('http://localhost:3001/recipes/2', {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});

  recipes.splice(recipeIndex, 1);

  res.status(204).end();

});

fetch('http://localhost:3001/recipes/4', {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

app.post('/drinks', function (req, res) {
  const {id, name, price} = req.body
  recipes.push({id, name, price});
  res.status(201).json({message: 'Drink created successfully'})
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));

  if(!drinks) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if(!drinks) return res.status(404).json({message: 'Recipe nor found'})
  res.status(200).json(drink)
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found'});

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();

});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  recipes.splice(drinkIndex, 1);

  res.status(204).end();

});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`})
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
