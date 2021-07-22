import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getGenres,getMyVideogames,getVideogamesAPI,getVideogamesOrder,getByGenre} from '../../store/actions/index';
import './filter.css'

function Filter(props){
   
    useEffect(()=>{
        props.getGenres();
    },[]);

    function handleSubmitGenres(event) {
            props.getByGenre(event.target.value);     
          }
          function handleSubmit(event) {
            if(event.target.value==='Mis videojuegos') props.getMyVideogames(); 
            if(event.target.value==='Videojuegos ya existentes') props.getVideogamesAPI();      
          }

          function handleSubmitOrder(event){              
            props.getVideogamesOrder(event.target.value,props.videogames);
          }


    return(
        
        <div className='filtros'>
            <div class="content-select">
            <label>ORDER BY: </label>
	        <select onChange={handleSubmitOrder}>
                <option key={0} ></option>
                <option key={1} >Name A-Z</option>
                <option key={2} >Name Z-A</option>
                <option key={3} >Mayor Rating</option>
                <option key={4} >Menor Rating</option>
	        </select>
	    <i></i>
        </div>
        <div class="content-select">
            <label>FILTER BY GENRE: </label>
	        <select onChange={handleSubmitGenres}>
                {props.genres?.map(genre =>{
                    return(
                    <option key={genre.name} value={genre.name}>{genre.name}</option>)
                })}
	        </select>
	    <i></i>
        </div>
        <div class="content-select">
        <label>MY VIDEOGAMES </label>
	        <select onChange={handleSubmit}>
                <option key={0} ></option>
                <option key={1} >Mis videojuegos</option>
                <option key={2} >Videojuegos ya existentes</option>
	        </select>
	    <i></i>
        </div>
        
       
        </div>
    )
}
const mapStateToProps = state => {
    return {
        genres: state.genres,
        videogames:state.videogames,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getGenres: genres => {
            dispatch(getGenres(genres))
        },
        getMyVideogames: videogames =>{
            dispatch(getMyVideogames(videogames))
        },
        getVideogamesAPI: videogames =>{
            dispatch(getVideogamesAPI(videogames))
        },
        getVideogamesOrder: (type,videogames) =>{
            dispatch(getVideogamesOrder(type,videogames))
        },
        getByGenre: (genre) =>{
            dispatch(getByGenre(genre))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)