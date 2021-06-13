import React from 'react';
import RowPost from './components/Row';
import requests from './requests';


function App() {
  return (
    <div className="App">

     
     <RowPost title="BESFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow={true}/>

     <RowPost title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <RowPost title="Top Rated"    fetchUrl={requests.fetchTopRated}/>
     <RowPost title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <RowPost title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <RowPost title="Horror Movies" fetchUrl={requests.fecthHorrorMovies}/>
      <RowPost title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <RowPost title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;
//firebase login
//firebase init
//firebase deploy
