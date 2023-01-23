

import React from 'react'
import { Link } from 'react-router-dom';


const API_IMG = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, vote_average, overview}) => {
  return (
  

    <div className='movie'>
      <img src = {API_IMG + poster_path} alt={title}/>
      <div className='movie_info'>
        <h3>{title}</h3>
        <span className="tag">{vote_average}</span>
       
      </div>

      <div className='movie-overview'>
        
          <Link style={{textDecoration: 'none'}} to="/Trailer">
          <h2>Overview: 
          <p>{overview}</p>
          </h2>
        </Link>
        

         </div>
    </div>
    
    
  )
}

export default Movie
