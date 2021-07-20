import React, {useEffect} from 'react';
import {searchVideogames } from '../../store/actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './videogamesFounded.css';

function VideogamesFounded(props){
    
    const videogameName = props.match.params.name;
    useEffect(() => {
        console.log(videogameName)
        props.searchVideogames(videogameName);
    },[videogameName])

    return (
        <div className='videogamesCard_founded'>
            {props.videogamesFounded.map(videogame => {
            return (
            <div className='videogameCard2_founded' key={videogame.id}>
                
                <Link to={`/home/${videogame.id}`} className='link_founded'> 
                    <img src={videogame.background_image} className='imageCard_founded'/>
                    <h4 className='titleCard_founded'>{videogame.name}</h4>
                </Link>
                <span className='genres_founded'> {videogame.genres.map(genre => {
                        return (
                        <span className='genero_founded' key={genre.id}>{genre.name+' - '}</span>)
                        
                        })}
                        <span id="emoji">&#x1F3AF;</span>

                </span>
            </div>
            )
            })}
        
        </div>   
)
}

const mapStateToProps = state => {
    return {
        videogamesFounded: state.videogamesFounded
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchVideogames: name => {
            dispatch(searchVideogames(name))
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(VideogamesFounded)