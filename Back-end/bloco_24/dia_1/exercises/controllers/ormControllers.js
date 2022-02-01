const express = require('express');
const { Books } = require('../models');
const router = express.Router();

router.get('/books', async (req, res) => {
  try {
    const books = await Books.findAll()

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ message: 'Algo deu errado'});
  };
});



module.exports = router;