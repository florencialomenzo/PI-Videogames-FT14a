
import React, {useState} from 'react';
import './Buscador.css';
import { connect } from 'react-redux';
import { searchVideogames } from '../../store/actions';
import buscador from '../../buscador.png';

function Buscador(props){
    const [state, setState] = useState('')

   function handleChange(event) {
            setState(event.target.value);
          }
    function handleSubmit(event) {
            event.preventDefault(); 
            props.searchVideogames(state);
          }

    return (
        <div className='Search'>
         
           <div>
            <input className='input' type="text" autoComplete="off" placeholder='Search' value={state} onChange={(e) => handleChange(e)}/>
            {/* <button onClick={handleSubmit} type="submit" className='buscar'></button> */}
            <img className='buscador' src={buscador} onClick={handleSubmit} width='40' alt='No se encontró la imagen'/>
            <i class="fa fa-search"></i>
          </div>
          
        </div>
    )
}
const mapStateToProps = function(state){
  return{
    videogames: state.videogames
  }
}
const mapDispatchToProps = function(dispatch){
  return {
    searchVideogames: name => {
        dispatch(searchVideogames(name))
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Buscador);