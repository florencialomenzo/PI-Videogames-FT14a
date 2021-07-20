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

export function getVideogameDetail(id){
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogame/${id}`)        
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_VIDEOGAME_DETAIL", payload: json });
          });
      };
  }
// const axios = require('axios');

// export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL"
// export function getVideogameDetail(id) {
//     return function (dispatch) {
//         return axios.get(`http://localhost:3001/videogame/${id}`)
//             .then((response) => {
//                 dispatch({
//                     type: GET_VIDEOGAME_DETAIL,
//                     payload: response.data
//                 })
//             })
//     }
// }