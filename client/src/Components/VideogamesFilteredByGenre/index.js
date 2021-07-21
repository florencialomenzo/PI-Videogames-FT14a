import React, {useEffect} from 'react';
import {searchVideogames } from '../../store/actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getByGenre} from '../../store/actions/index'


function VideogamesFilteredByGenre(props){
    
    const genre_name = props.match.params.genre;
    console.log(genre_name)
    console.log(props)
    
    useEffect(() => {
        props.getByGenre(genre_name);
    },[genre_name])

    return (
        <div className='videogamesCard_founded'>
            {props.videogamesFiltered?.map(videogame => {
            return (
            <div className='videogameCard2_founded' key={videogame.id}>
                
                <Link to={`/home/${videogame.id}`} className='link_founded'> 
                    <img src={videogame.background_image} className='imageCard_founded'/>
                    <h4 className='titleCard_founded'>{videogame.name}</h4>
                </Link>
                <span className='genres_founded'> {videogame.genres.map(genre => {
                        return (
                        <span className='genero_founded' key={genre.name}>{genre.name+' - '}</span>)
                        
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
        videogamesFiltered: state.videogamesFiltered,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getByGenre: genre_name => {
            dispatch(getByGenre(genre_name))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideogamesFilteredByGenre)