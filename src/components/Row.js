import React, { useEffect, useState } from 'react';
import axios from '../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function RowPost({title, fetchUrl, isLargeRow}) {
 const [ movies, setMovies ] = useState([]);


 //A snipet of code that  runs based on a specific condition
  useEffect(()=> {
     async function fetchData(){
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
         
     }
     fetchData();
  }, [fetchUrl])
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="movies-row">
                <div className="post-container">
              {movies.map( movie => (
                  
                         
                  <img key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                 
                  
                  
                  
              ))}
              </div>
            </div>

        </div>
    )
}

export default RowPost;