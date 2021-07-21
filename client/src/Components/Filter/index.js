import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import {getGenres,filterByGenre, getMyVideogames,getVideogamesAPI,getVideogamesOrder} from '../../store/actions/index';
import {Link, useHistory} from 'react-router-dom';
import './filter.css'

function Filter(props){

    // const [genero,setGenero]=useState('');
   
    useEffect(()=>{
        props.getGenres();
    },[]);

    // const handleChange = function(e) {
    //     e.preventDefault();
    //     setGenero(e.target.value);
    //     props.filterByGenre(genero);
    //     setGenero('');
    // }
    const [filter, setFilter] = useState('')
    const [videogames,setVideogames] = useState('')
    const history= useHistory()
     //hook que cambia la url a mano ;)

//    function handleChange(event) {
//             setState(event.target.value);
//           }
    function handleSubmitGenres(event) {
            console.log(event.target.value);
            setFilter(event.target.value);  
            history.push(`/home/filter/${event.target.value}`)       
          }
          function handleSubmit(event) {
            console.log(event.target.value);
            setVideogames(event.target.value); 
            if(event.target.value==='Mis videojuegos') props.getMyVideogames(); 
            if(event.target.value==='Videojuegos ya existentes') props.getVideogamesAPI();      
          }

          function handleSubmitOrder(event){
              console.log(event.target.value)
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
        getVideogamesOrder: videogames =>{
            dispatch(getVideogamesOrder(videogames))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)