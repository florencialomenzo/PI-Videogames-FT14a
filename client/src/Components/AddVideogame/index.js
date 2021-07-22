import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import './addVideogame.css';
import {addVideogames,getGenres} from '../../store/actions/index';


function AddVideogame(props){
    const [body,setBody] = useState({
        name:'',
        description_raw:'',
        rating:'',
        plataformas:[],
        lanzamiento:'',
        genres:[],
    })

    useEffect( () => {
        props.getGenres();
    },[]);


    const handleInputChange = function (e) {
        setBody({ ...body, [e.target.name]: e.target.value });
    }

    const handleSelectChange = function (e) {
        
        var genero = body.genres.find(el => el === e.target.value)
        if(!genero && e.target.value!=='0')
            {alert('Se agrego un genero al videojuego')
            let data=[...body.genres];
            data.push(e.target.value);
            setBody({...body, genres: data});
            console.log('estas seleccionando:'+e.target.value)
            }
        else{
            alert('El genero ya fue agregado')
        }
   
    }
  
    const handleSubmit = function(e){
        e.preventDefault();
        props.addVideogames(body);
        setBody({
            name:'',
            description_raw:'',
            rating:'',
            plataformas:'',
            lanzamiento:'',
            genres:[],
        });
    }

    return(
        <div className='form_outside'> 
        <p className='Add_Videogame'>ADD VIDEOGAME</p>
            <form className='form' onSubmit={handleSubmit}> 
                <label>New videogame:</label>
                <br/>
                <input required type='text' name='name' value={body.name} onChange={handleInputChange}/>
                <label>Rating:</label>
                <input type='number' name='rating' value={body.rating} step={0.01} max={5} min={0} onChange={handleInputChange}/>
                <label>Plataforms:</label>
                <input required type='text' name='plataformas' placeholder='Xbox/ PC/ Playstation 5' value={body.plataformas} onChange={handleInputChange}/>
        

                        <label for="start">Fecha de lanzamiento:</label>

                        <input type="date" id="start" name="lanzamiento" value={body.lanzamiento} min="2018-01-01" max="2021-12-31" onChange={handleInputChange}/>
                <label>Description:</label>
                <input required type='text' name='description_raw' value={body.description_raw} onChange={handleInputChange}/>
                <div>
                        <label>Select the genres:</label>
                        <select name='select' onChange={handleSelectChange} >
                            <option value="0"></option>
                            {props.genres?.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                        
                </div>
                <button>CREAR VIDEOGAME</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        genres: state.genres
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addVideogames: videogame => {
            dispatch(addVideogames(videogame))
        },
        getGenres: genres => {
            dispatch(getGenres(genres))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddVideogame);