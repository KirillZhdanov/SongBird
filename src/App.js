import React, { Suspense } from 'react';
import './App.css';
import Loader from'./components/Loader';
import NavBarComponent from'./components/NavBarComponent';
import Game from './components/Game';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <div className="App container"> 
    <NavBarComponent/>
    <Suspense fallback={<Loader/>}>
    <Game/>
  </Suspense>
    </div>
  );
}

export default App;
