import React from 'react';
import RowPost from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Navbar';
import Footer  from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
     <Banner />
     
     <RowPost title="BESFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow={true}/>

     <RowPost title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <RowPost title="Top Rated"    fetchUrl={requests.fetchTopRated}/>
     <RowPost title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <RowPost title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <RowPost title="Horror Movies" fetchUrl={requests.fecthHorrorMovies}/>
      <RowPost title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <RowPost title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>

     <Footer />
    </div>
  );
}

export default App;
//firebase login
//firebase init
//firebase deploy
