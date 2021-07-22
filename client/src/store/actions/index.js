const axios = require('axios');

export function getVideogames() {
    return function(dispatch) {
      return fetch('http://localhost:3001/videogames')
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_VIDEOGAMES", payload: json });
        });
    };
  }

  export function searchVideogames(name){
    return function(dispatch){
      return fetch(`http://localhost:3001/videogames?name=${name}`)
      .then(response => response.json())
      .then(json => {
          dispatch({ type: "SEARCH_VIDEOGAMES", payload: json });
      });
    };  
  };

  export function addVideogames(body){
      return async function () {
        return await axios(
          {
            method: 'post',
            url: `http://localhost:3001/videogame`,
            data:{
              name: body.name,
              description_raw: body.description_raw,
              lanzamiento: body.lanzamiento,
              rating: body.rating,
              plataformas: body.plataformas,
              genres: body.genres
            }
         })       
      }
    }

 export function getGenres(){
    return function(dispatch){
      return fetch(`http://localhost:3001/genres`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: 'GET_GENRES', payload: json})
      })
    }
 }
export function getVideogameDetail(id) {
    return async function (dispatch) {
        return await axios.get(`http://localhost:3001/videogame/${id}`)
            .then((response) => {
                dispatch({
                    type: "GET_VIDEOGAME_DETAIL",
                    payload: response.data
                })
            })
    }
}
export function getByGenre(genre){
  return function(dispatch){
    return fetch(`http://localhost:3001/filterGenres/${genre}`)
    .then(response => response.json())
    .then(json => {
      dispatch({type: "GET_BY_GENRE", payload: json})
    })
  }
}

export function getMyVideogames(){
  return function(dispatch){
    return fetch(`http://localhost:3001/myvideogames`)
    .then(response => response.json())
    .then(json => {
      dispatch({type: "GET_MY_VIDEOGAMES", payload: json})
    })
  }
}
export function getVideogamesAPI(){
  return function(dispatch){
    return fetch(`http://localhost:3001/videogamesAPI`)
    .then(response => response.json())
    .then(json => {
      dispatch({type: "GET_VIDEOGAMES_API", payload: json})
    })
  }
}
export function getVideogamesOrder(order,arreglo) {
  return function(dispatch) {
    const videogames = arreglo.slice()
    if(order==='Name A-Z') videogames.sort((a, b) => (a.name > b.name) ? 1 : -1)
    if(order==='Name Z-A') videogames.sort((a, b) => (a.name > b.name) ? -1 : 1)
    if(order==='Mayor Rating')videogames.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
    if(order==='Menor Rating')videogames.sort((a, b) => (a.rating < b.rating) ? -1 : 1)
    dispatch({type:'ORDER_VIDEOGAMES', payload: videogames}) 
   }
  }