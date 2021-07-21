const initialState = {
     videogames: [],
     videogamesFounded : [],
     videogamesFiltered : [],
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
    if(action.type === "GET_BY_GENRE"){
      return {
        ...state,
        videogamesFiltered: action.payload
      }
    }
    if(action.type === "GET_MY_VIDEOGAMES"){
      return {
        ...state,
        videogames: action.payload
      }
    }
    if(action.type === "GET_VIDEOGAMES_API"){
      return {
        ...state,
        videogames: action.payload
      }
    }
    if(action.type === "ORDER_VIDEOGAMES"){
      // let newArray=action.payload[0].sort((a, b)=> a.name.localeCompare(b.name))
      return {
        ...state,
        videogames: action.payload
      }
    }

    return state;
  }
  
  export default reducer;