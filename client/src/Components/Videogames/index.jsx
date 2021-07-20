import React, {useEffect} from 'react';
import './videogames.css';
import {connect} from 'react-redux';
import {getVideogames} from '../../store/actions/index';
import {Link} from 'react-router-dom';

function ShowVideogames(props) {
    
    useEffect(() => {
        props.getVideogames();
    }, [])
        return (
            <div className='videogamesCard'>
                {props.videogames.map(videogame => {
                return (
                <div className='videogameCard2' key={videogame.id}>
                    
                    <Link to={`/home/${videogame.id}`} className='link'> 
                        <img src={videogame.background_image} className='imageCard'/>
                        <h4 className='titleCard'>{videogame.name}</h4>
                    </Link>
                    <span className='genres'> {videogame.genres.map(genre => {
                           return (
                            <span className='genero' key={genre.id}>{genre.name+' - '}</span>)
                            
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
        videogames: state.videogames
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getVideogames: videogames => {
            dispatch(getVideogames(videogames))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowVideogames)