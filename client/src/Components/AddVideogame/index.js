import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import './addVideogame.css';


// function AddVideogame(props){

//     useEffect( () => {
//         console.log('hola')
//     },[]);

//     return(
//         <h1> Hola
//             <form>
//                 <label>New videogame:</label>
//                 <input type='text' name='title'/>
//                 <div>
//                         <label>Select the genre:</label>
//                         <select onChange={handleSelectChange} >
//                             <option value="0">none</option>
//                             {props.genres.map(el => <option value={el.id}>{el.name}</option>)}
//                         </select>
//                 </div>
//             </form>
//         </h1>
//     )
// };

// export default AddVideogame;


// export default connect(mapStateToProps,mapDispatchToProps)(AddVideogame);