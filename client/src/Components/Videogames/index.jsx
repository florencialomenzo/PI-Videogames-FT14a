import React, {useEffect,useState} from 'react';
import './videogames.css';
import {connect} from 'react-redux';
import {getVideogames} from '../../store/actions/index';
import {Link} from 'react-router-dom';
import game from '../../game.jpg';

function ShowVideogames(props) {
    // const [state,setState]=useState("");

    useEffect(() => {
        props.getVideogames();
    }, [])

        return (
            <div className='videogamesCard'>
                {props.videogames?.map(videogame => {
                return (
                <div className='videogameCard2' key={videogame.id}>
                    
                    <Link to={`/home/${videogame.id}`} className='link'> 
                        {videogame.id.length>10?(<img src={game} className='imageCard'/>):<img src={videogame.background_image} className='imageCard' alt=""/>}
                        <h4 className='titleCard'>{videogame.name}</h4>
                    </Link>
                    <span className='genres'> {videogame.genres?.map(genre => {
                           return (
                            <span className='genero' key={genre.id}>{genre.name+' - '}</span>)
                            
                            })}
                            <span id="emoji">&#x1F3AF;</span>

                    </span>
                </div>
                // <div>{videogame.genres?.map(genre =>{
                //     return(
                //         <div>{genre.name===state?(<div>
                //              <div className='videogameCard2' key={videogame.id}>
                    
                //          <Link to={`/home/${videogame.id}`} className='link'> 
                //              <img src={videogame.background_image} className='imageCard'/>
                //              <h4 className='titleCard'>{videogame.name}</h4>
                //          </Link>
                //          <span className='genres'> {videogame.genres?.map(genre => {
                //                return (
                //                 <span className='genero' key={genre.id}>{genre.name+' - '}</span>)
                                
                //                 })}
                //                 <span id="emoji">&#x1F3AF;</span>
    
                //         </span>
                //     </div>

                //         </div>):(<div>{null}</div>)}</div>
                //     )
                // })}</div>
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