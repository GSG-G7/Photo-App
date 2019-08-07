const nodeFetch = require('node-fetch');
require('dotenv/config');

const API = {
  url: 'https://api.unsplash.com/search/photos',
  key: process.env.API_KEY,
  getUrl(keyword) {
    return `${this.url}?query=${keyword}&page=1&per_page=5&client_id=${this.key}`;
  }
};

const search = (req, res) => {
  nodeFetch(API.getUrl(req.body.search))
    .then(_res => _res.json())
<<<<<<< HEAD
    .then(data => res.render('results', { data: data.results }))
    .catch(err => res.render('500', { message: 'Internal Server Error', err }));
=======
    .then(data => res.render('results', { data: data.results }));
>>>>>>> 3b19cc339d21daa6c37bc866b594445e5b95c18d
};

module.exports = search;
