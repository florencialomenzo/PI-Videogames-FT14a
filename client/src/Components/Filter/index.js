import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import {getGenres,filterByGenre, getMyVideogames,getVideogamesAPI} from '../../store/actions/index';
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
    return(
        
        <div class="content-select">
            <label>Filter by Genre: </label>
	        <select onChange={handleSubmitGenres}>
                {props.genres?.map(genre =>{
                    return(
                    <option key={genre.name} value={genre.name}>{genre.name}</option>)
                })}
	        </select>
	    <i></i>
        <label>Filter: </label>
	        <select onChange={handleSubmit}>
                <option key={0} ></option>
                <option key={1} >Mis videojuegos</option>
                <option key={2} >Videojuegos ya existentes</option>
	        </select>
	    <i></i>
       
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
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)