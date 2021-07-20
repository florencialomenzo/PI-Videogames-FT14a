const {Videogame} = require('../../db')
const {Genres} = require('../../db')
const {v4: uuidv4} = require('uuid');
const fetch = require('node-fetch');
const {YOUR_API_KEY} = process.env;
const { Op } = require("sequelize");

function getAllVideogames(req,res,next){

    if (req.query.name){ //GET /videogames?name="..."
        const videogamesDb = Videogame.findAll({where: {name: {[Op.substring]: req.query.name}}})
        const videogamesApi = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${req.query.name}`)
        .then(el => el.json())
    Promise.all([videogamesDb, videogamesApi])
        .then((results) => {
            const [videogamesDb,videogamesApi] = results;
            const response = videogamesDb.concat(videogamesApi.results)
            var array1=[];
            response.forEach((elem,index)=>{if (index<15){array1.push(elem)}})
            res.json(array1);
        })
        .catch(error => next(error))

    }else{
    const videogamesDb = Videogame.findAll()
    const videogamesApi = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)
        .then(el => el.json())
    Promise.all([videogamesDb, videogamesApi])
        .then((results) => {
            const [videogamesDb, videogamesApi] = results;
            const response = videogamesDb.concat(videogamesApi.results)
            var array2=[];
            response.forEach((elem,index)=>{if (index<15){array2.push(elem)}})
            res.json(array2);
        })
        .catch(error => next(error))
    }        
}

function getVideogameById(req,res,next){
    const id = req.params.id;
    if(id.length>10){
        Videogame.findByPk(id)
            .then(videogame => res.json(videogame))
            .catch(error => next(error));
    }else{
    fetch(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
            .then(response => response.json())
            .then(videogames => res.json(videogames))
            .catch(error => next(error))
        }
}

async function addVideogame(req,res,next){
    
    const {name, description, plataforma, genres} = req.body
    //Crea el juego
    const newVideogame = await Videogame.create({
        id: uuidv4(),
        name: name,
        description: description,
        plataforma: plataforma,
    })
    //agrega el genero en la BD
    const add_genres = await Genres.findAll({
        where: { name: genres }
    })
    await newVideogame.addGenres(add_genres);
    return res.json(newVideogame);
}


module.exports = {
    getAllVideogames,
    getVideogameById,
    addVideogame
}