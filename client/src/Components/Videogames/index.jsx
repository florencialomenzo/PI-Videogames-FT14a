import React, {useEffect,useState} from 'react';
import './videogames.css';
import {connect} from 'react-redux';
import {getVideogames} from '../../store/actions/index';
import {Link} from 'react-router-dom';
import game from '../../game.jpg';
import Pagination from '../Pagination/index';

function ShowVideogames({videogames,getVideogames}) {
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage] = useState(15);


    useEffect(() => {
        
        getVideogames();
            
    }, [])

    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = videogames.slice(indexOfFirstPost,indexOfLastPost)
    const pagination= (pageNumber) => setCurrentPage(pageNumber)
    
        return (
            <div className='videogamesCard'>
                
                {currentPosts?.map(videogame => {
                return (
                <div className='videogameCard2' key={videogame.id}>
                    
                    <Link to={`/home/${videogame.id}`} className='link'> 
                        {videogame.id.length>10?(<img src={game} className='imageCard'/>):<img src={videogame.background_image} className='imageCard' alt=""/>}
                        <span id="emoji" className='puntaje'>&#11088;+{videogame.rating}</span>
                        <h4 className='titleCard'>{videogame.name}</h4>
                    </Link>
                        <span className='genres'> {videogame.genres?.map(genre => {
                           return (
                            <span className='genero' key={genre.id}>{genre.name+' - '}</span>)
                            
                            })}
                            <span id="emoji">&#x1F3AF;</span>
                            <br/>
                            

                    </span>
                </div>
                )})}
            
            <div>
                <Pagination postsPerPage={postsPerPage} totalPosts={videogames.length} paginate={pagination}/>
            </div>

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