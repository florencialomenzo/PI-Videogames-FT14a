const {Videogame} = require('../../db')
const {Genres} = require('../../db')
const {v4: uuidv4} = require('uuid');
const fetch = require('node-fetch');
const {YOUR_API_KEY} = process.env;
const { Op } = require("sequelize");

function getAllVideogames(req,res,next){

    if (req.query.name){ //GET /videogames?name="..."
        const videogamesDb = Videogame.findAll({where: {name: {[Op.substring]: req.query.name}},include: Genres})
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
    const videogamesDb = Videogame.findAll({include: Genres})
    const videogamesApi = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`)
        .then(el => el.json())
    const videogamesApi2 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`)
        .then(el2 => el2.json())
    const videogamesApi3 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=6`)
        .then(el3 => el3.json())
    const videogamesApi4 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=7`)
        .then(el4 => el4.json())
    const videogamesApi5 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=8`)
        .then(el5 => el5.json())
    Promise.all([videogamesDb,videogamesApi, videogamesApi2,videogamesApi3,videogamesApi4, videogamesApi5])
        .then((response) => {
            const [videogamesDb,videogamesApi, videogamesApi2, videogamesApi3, videogamesApi4, videogamesApi5] = response;
            const resultado = videogamesApi.results.concat(videogamesApi2.results.concat(videogamesApi3.results.concat(videogamesApi4.results.concat(videogamesApi5.results.concat(videogamesDb)))))         
            res.send(resultado)
        })
        .catch(error => next(error))
    }        
}

async function getVideogameById(req,res,next){
    const id = req.params.id;
    if(id.length>10){
        Videogame.findByPk(id,{include: Genres})
            .then(videogame => res.json(videogame))
            .catch(error => next(error));
    }else{
    await fetch(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
            .then(response => response.json())
            .then(videogames => {
            //     var array2=[];
            // videogames.forEach((elem,index)=>{if (index<15){array2.push(elem)}})
            res.json(videogames)})
            .catch(error => next(error))
        }
}

function getMyVideogames(req,res,next){
    Videogame.findAll({include: Genres})
        .then(videogame => res.json(videogame))
        .catch(error => next(error))
}
function getVideogamesAPI(req,res,next){
    
    // await fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=6`)
    //         .then(response => response.json())
    //         .then(videogames => {
    //         //     var array2=[];
    //         // videogames.forEach((elem,index)=>{if (index<15){array2.push(elem)}})
    //         res.json(videogames.results)})
    //         .catch(error => next(error))

    const videogamesApi = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`)
        .then(el => el.json())
    const videogamesApi2 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`)
        .then(el2 => el2.json())
    const videogamesApi3 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=6`)
        .then(el3 => el3.json())
    const videogamesApi4 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=7`)
        .then(el4 => el4.json())
    const videogamesApi5 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=8`)
        .then(el5 => el5.json())
    Promise.all([videogamesApi, videogamesApi2,videogamesApi3,videogamesApi4, videogamesApi5])
        .then((response) => {
            const [videogamesApi, videogamesApi2, videogamesApi3, videogamesApi4, videogamesApi5] = response;
            const resultado = videogamesApi.results.concat(videogamesApi2.results.concat(videogamesApi3.results.concat(videogamesApi4.results.concat(videogamesApi5.results))))
            res.send(resultado)
        })
    }


async function addVideogame(req,res,next){
    
    const {name, description_raw, plataformas, lanzamiento, rating, genres} = req.body
    //Crea el juego
    const newVideogame = await Videogame.create({
        id: uuidv4(),
        name: name,
        description_raw: description_raw,
        plataformas: plataformas,
        lanzamiento: lanzamiento,
        rating: rating
    })
    
    const add_genres = await Genres.findAll({
        where: { id: {
            [Op.in]: genres
        } }
    })
    await newVideogame.setGenres(add_genres);
    return res.json(newVideogame);
}

function filterByGenres(req,res,next){
    const videogamesDb = Videogame.findAll({include: Genres})
    const videogamesApi = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`)
        .then(el => el.json())
    const videogamesApi2 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`)
        .then(el2 => el2.json())
    const videogamesApi3 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=6`)
        .then(el3 => el3.json())
    const videogamesApi4 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=7`)
        .then(el4 => el4.json())
    const videogamesApi5 = fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=8`)
        .then(el5 => el5.json())
    Promise.all([videogamesDb, videogamesApi, videogamesApi2,videogamesApi3,videogamesApi4, videogamesApi5])
        .then((results) => {
            const [videogamesDb, videogamesApi, videogamesApi2, videogamesApi3, videogamesApi4, videogamesApi5] = results;
            var dbFiltered=[];
            for(var i=0;i<videogamesDb.length;i++){
                videogamesDb[i].genres.forEach(elem => {
                    if(elem.name===req.params.genre){dbFiltered.push(videogamesDb[i])}})
                }
            var rest = 15-dbFiltered.length    
            var apiFiltered=[];
            for(var i=0;i<videogamesApi.results.length;i++){
                videogamesApi.results[i].genres.forEach(elem => {
                    if(elem.name===req.params.genre){apiFiltered.push(videogamesApi.results[i])}})
            }
            for(var i=0;i<videogamesApi2.results.length;i++){
                videogamesApi2.results[i].genres.forEach(elem => {
                    if(elem.name===req.params.genre){apiFiltered.push(videogamesApi2.results[i])}})
            }
            for(var i=0;i<videogamesApi3.results.length;i++){
                videogamesApi3.results[i].genres.forEach(elem => {
                    if(elem.name===req.params.genre){apiFiltered.push(videogamesApi3.results[i])}})
            }
            for(var i=0;i<videogamesApi4.results.length;i++){
                videogamesApi4.results[i].genres.forEach(elem => {
                    if(elem.name===req.params.genre){apiFiltered.push(videogamesApi4.results[i])}})
            }
            for(var i=0;i<videogamesApi5.results.length;i++){
                videogamesApi5.results[i].genres.forEach(elem => {
                    if(elem.name===req.params.genre){apiFiltered.push(videogamesApi5.results[i])}})
            }
            const response = apiFiltered.concat(dbFiltered)
            
            res.json(response);
        })
        .catch(error => next(error))
}


module.exports = {
    getAllVideogames,
    getVideogameById,
    addVideogame,
    filterByGenres,
    getMyVideogames,
    getVideogamesAPI
}