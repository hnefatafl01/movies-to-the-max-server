const express = require('express');
const router = express.Router();
const request = require('request');
const API_KEY = process.env.API_KEY;

router.post(`/search`, (req, res) => {
  const search = req.body.search;
  request.get(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`).pipe(res)
})

router.get('/search/:id', (req, res) => {
  const id = req.params.id;
  request.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`).pipe(res)
})

module.exports = router;
