import React from 'react';
import './pagination.css'


export default function Pagination(props){

    const pageNumbers = [];
    for (var i=1; i <=Math.ceil(props.totalPosts/props.postsPerPage);i++){
        pageNumbers.push(i)
    }
    

    return(
      
        <div className='pagination-container'>
            <span className='pages'>{'PAGES:    '}</span>
               {
                <ul className='pagination'>
                   {pageNumbers.map(number =>(
                       <li>
                           <a className={props.estado===number?'numbersActive':'numbers'} onClick={()=>props.paginate(number)}>{number}</a>
                       </li>
                   ))}
                </ul>
               }
    
           
        </div>

    )
}