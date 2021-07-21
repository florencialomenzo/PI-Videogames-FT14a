import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { getVideogameDetail } from "../../store/actions/index";
import './videogameDetail.css';
import '../../game.jpg';


function VideogameDetail({getVideogameDetail,videogameDetail,match}) {
    const id = match.params.id
    console.log(id);
    console.log(videogameDetail)

    async function getDetail(){
        await getVideogameDetail(id)
    }
    useEffect(() => {
        getDetail()
        // getVideogameDetail(id)
    }, [])
   
    
    return (
        <div className='videogamesCard_Detail'>
            <h3 className='titleDetail'>{videogameDetail.name}</h3>
            <div className="videogameDetail">
                <img  src={videogameDetail.background_image} className="imageDetail"/>
                <div className='infoDetail'>
                    <div className='description'>{videogameDetail.description_raw}</div>
                    <br/>
                    <div>
                        <span className='rating'>{videogameDetail.rating} &#11088;</span>
                        <span>
                            {videogameDetail.genres?.map((genre) => {
                        return (
                        <span key={genre.id}>{genre.name+' - '}</span>)
                        
                        })}
                        <span id="emoji">&#x1F3AF;</span>
                        <span> Fecha de lanzamiento: {videogameDetail.released} {videogameDetail.lanzamiento?.slice(0,10)}</span> 
                        <br/>
                        <br/>
                        <span> {"Plataformas: "} 
                            <span>{videogameDetail.plataformas}</span>
                            {videogameDetail.platforms?.map(e =>{ 
                            return(
                                <span key={e.platform.id}>{e.platform.name}{'/ '}</span>)
                        })}&#127918;</span> 

                </span>
                    </div>
                </div>
            </div>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        videogameDetail: state.videogameDetail
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getVideogameDetail: videogameDetail => {
            dispatch(getVideogameDetail(videogameDetail))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideogameDetail)