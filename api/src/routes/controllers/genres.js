const {Genres} = require('../../db');
const {YOUR_API_KEY} = process.env;
const fetch = require('node-fetch');

function getGenres(req, res ){
    fetch(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
        .then(response => response.json())
        .then(genres => {
            genres.results.map(genre => {
                Genres.create({
                    id: genre.id,
                    name: genre.name
                })
                .then(() => console.log('todo ok'))
                .catch(error => console.log(error))
            })
        })
    Genres.findAll()
        .then(genres => res.json(genres))
}
module.exports = {
    getGenres
}