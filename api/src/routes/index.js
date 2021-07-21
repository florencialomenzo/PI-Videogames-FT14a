const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllVideogames, getVideogameById, addVideogame, filterByGenres, getMyVideogames, getVideogamesAPI} = require('./controllers/videogame');
const {getGenres} = require('./controllers/genres');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames',getAllVideogames)
router.get('/videogame/:id',getVideogameById)
router.post('/videogame',addVideogame)
router.get('/genres',getGenres)
router.get('/filterGenres/:genre',filterByGenres)
router.get('/myvideogames',getMyVideogames)
router.get('/videogamesAPI',getVideogamesAPI)
    

module.exports = router;
