const {YOUR_API_KEY} = process.env;

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

// export function getVideogameDetail(id){
//     return function(dispatch) {
//         return fetch(`http://localhost:3001/videogame/${id}`)        
//           .then(response => response.json())
//           .then(json => {
//             dispatch({ type: "GET_VIDEOGAME_DETAIL", payload: json });
//           });       
//       };
//   }

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

const axios = require('axios');

export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL"
export function getVideogameDetail(id) {
    return async function (dispatch) {
        return await axios.get(`http://localhost:3001/videogame/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_VIDEOGAME_DETAIL,
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
    if(order==='Name A-Z'){ arreglo[0].sort((a, b)=> a.Nombre.localeCompare(b.Nombre) );}
    if(order==='Name Z-A'){ arreglo[0].sort((a, b)=> b.Nombre.localeCompare(a.Nombre) )}
    if(order==='Mayor Rating'){arreglo[0].sort((a, b)=> a.rating.localeCompare(b.rating))};
    if(order==='Menor Rating'){arreglo[0].sort((a, b)=> b.rating.localeCompare(a.rating))}; 
 
  }
}