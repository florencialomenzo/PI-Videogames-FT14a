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
              description: body.description,
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
      .then(genres => {
        dispatch({type: 'GET_GENRES', payload:genres})
      })
    }
 }
// export function resetStore(){
//   dispatch({type:'RESET_STORE',payload})
// }
  // export function getGenres(){
  //   return function(dispatch){
  //     return fetch()
  //   }
  // }
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