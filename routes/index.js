var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY =  process.env.API_KEY

router.get("/movies", (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
    // adresse : https://api.themoviedb.org/3/discover/movie?api_key=0982fbc018432b16abb61cc1069dba8e
    .then(response => response.json())
    .then(data => {
        res.json({result: true, movies: data.results})})
})
module.exports = router;
