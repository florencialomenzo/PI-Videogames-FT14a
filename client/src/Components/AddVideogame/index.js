import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import './addVideogame.css';
import {addVideogames,getGenres} from '../../store/actions/index';


// function AddVideogame(props){
//     const [body,setBody] = useState({
//         name:'',
//         description:'',
//         rating:'',
//         plataformas:'',
//         lanzamiento:'',
//         genres:'',
//     })

//     useEffect( () => {
//         props.getGenres();
//     },[]);

//     function handleSelectChange{

//     }

//     return(
//         <div className='form_outside'> 
//         <p className='Add_Videogame'>Add Videogame</p>
//             <form className='form'> 
//                 <label>New videogame:</label>
//                 <input type='text' name='title'/>
//                 <label>Rating:</label>
//                 <input type='text' name='rating'/>
//                 <label>Plataformas:</label>
//                 <input type='text' name='title'/>
//                 <label>Lanzamiento:</label>
//                 <input type='text' name='title'/>
//                 <label>Description:</label>
//                 <input type='text' name='title'/>
//                 <div>
//                         <label>Select the genre:</label>
//                         <select onChange={handleSelectChange} >
//                             <option value="0">none</option>
//                             {props.genres.map(genre => <option value={genre.id}>{genre.name}</option>)}
//                         </select>
//                 </div>
//             </form>
//         </div>
//     )
// };



// const mapStateToProps = state => {
//     return {
//         genres: state.genres
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         addVideogames: videogame => {
//             dispatch(addVideogames(videogame))
//         },
//         getGenres: genres => {
//             dispatch(getGenres(genres))
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(AddVideogame);