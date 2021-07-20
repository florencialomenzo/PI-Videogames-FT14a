const initialState = {
     videogames: [],
     videogamesFounded : [],
     videogameDetail: {},
     genres: []
  };

  function reducer(state = initialState, action) {
    if (action.type === "GET_VIDEOGAMES") {
        return {
          ...state,
          videogames: action.payload 
        };
    }
    if (action.type === "SEARCH_VIDEOGAMES") {
      return {
        ...state,
        videogamesFounded: action.payload 
      };
  }

    if (action.type === "GET_VIDEOGAME_DETAIL"){
        return {
          ...state,
          videogameDetail: action.payload
        }
    }
    if(action.type === "GET_GENRES"){
      return {
        ...state,
        genres: action.payload
      }
    }
    return state;
  }
  
  export default reducer;