
import React, {useEffect,useState} from 'react';
import './NavBar.css';
import {Link, useHistory} from 'react-router-dom';
import VideogamesFounded from '../VideogamesFounded';

function Buscador(){
    const [state, setState] = useState('')
    const history= useHistory()
     //hook que cambia la url a mano ;)

   function handleChange(event) {
            setState(event.target.value);
          }
    function handleSubmit(event) {
            event.preventDefault();
            console.log(state);  
            history.push(`/home/founded/${state}`)       
          }

    return (
        <div className='fondo'>
         <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
           <div>
             <input
              type="text"
              autoComplete="off"
              value={state}
              onChange={(e) => handleChange(e)}
            />

            <button type="submit" className='buscar'>BUSCAR</button>
            
          </div>
          </form>
        </div>
    )
}

export default Buscador;