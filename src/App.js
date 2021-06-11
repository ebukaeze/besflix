import React from 'react';
import RowPost from './components/Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
     <h1>Hello Web</h1>
     <RowPost title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <RowPost title="Trending Now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
//firebase login
//firebase init
//firebase deploy
