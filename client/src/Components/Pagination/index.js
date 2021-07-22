import React from 'react';
import './pagination.css'


export default function Pagination(props){

    const pageNumbers = [];
    for (var i=1; i <=Math.ceil(props.totalPosts/props.postsPerPage);i++){
        pageNumbers.push(i)
    }
    

    return(
      
        <div>
            <span className='pages'>{'Pages:    '}</span>
               {
                   pageNumbers.map(number =>(
                       <button>
                           <a className='numbers' onClick={()=>props.paginate(number)}>{number}</a>
                       </button>
                   ))
               }
    
           
        </div>

    )
}