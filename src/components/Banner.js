import React, { useEffect, useState } from 'react';
import requests from '../requests';
import axios from '../axios';


function Banner(){
     let winMobile = window.innerWidth;
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            )

            
        }
      fetchData();

    }, []);

     function truncate(str, n){
      return str?.length  > n ? str.substr(0, n - 1) + "..." : str;
     }

    
    return(
        <header className="banner"
        style={  winMobile = 900 ? { 
            backgroundSize:'cover',
            backgroundImage: `url(
                https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backroundPosition:"center center", 
        
    } : { backgroundSize:'cover',
            backgroundImage: `url(
                https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backroundPosition:"center center", width: '230px', maxWidth: '300px' }} >
        
        <div className="banner__contents">
            <div className="container">
              <h1 className="banner__title">
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className="banner__buttons">
                  <button className="banner__button">Play</button> 
                  <button className="banner__button">My List</button> 
                
              </div>
              <p className="banner__description">
                  {truncate(movie?.overview, 500)}
              </p>
              </div>
        </div>
        <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner;