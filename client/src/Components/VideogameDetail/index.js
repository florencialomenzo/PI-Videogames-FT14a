import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { getVideogameDetail } from "../../store/actions/index";
import './videogameDetail.css'
function VideogameDetail(props) {
    const id = props.match.params.id
    console.log(id);
    console.log(props.videogameDetail)

    useEffect(() => {
        props.getVideogameDetail(id)
    }, [])
    
    return (
        <div className='videogamesCard_Detail'>
            <h3 className='titleDetail'>{props.videogameDetail.name}</h3>
            <div className="videogameDetail">
                <img  src={props.videogameDetail.background_image} className="imageDetail" alt="No se encontro" height="200px" />
                <div className='infoDetail'>
                    <div className='description'>{props.videogameDetail.description}</div>
                    <br/>
                    <span className='rating'>{props.videogameDetail.rating} &#11088;</span>
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