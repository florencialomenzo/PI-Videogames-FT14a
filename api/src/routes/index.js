const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllVideogames, getVideogameById, addVideogame} = require('./controllers/videogame');
const {getGenres} = require('./controllers/genres');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames',getAllVideogames)
router.get('/videogame/:id',getVideogameById)
router.post('/videogame',addVideogame)
router.get('/genres',getGenres)
    

module.exports = router;
