import React, { Suspense ,useRef,useState} from 'react';
import './App.css';
import Loader from'./components/Loader';
import NavBarComponent from'./components/NavBarComponent';
import Game from './components/Game';
import birdsData from './birdsData';
import 'materialize-css/dist/css/materialize.min.css'
import Context from './context'

function App() {
  const [RoundCounter,getRoundCount] = useState(0);
  const ScoreCounter = useRef(0);
  const RoundCounterHandler = (ansData) =>{
    if(ansData===mainBird.name)getRoundCount(RoundCounter+1);
    
  }
  let birds = birdsData[RoundCounter];
  let mainBird=birds[Math.floor((Math.random() * 5))];
  return (
    <Context.Provider value = {{RoundCounter,RoundCounterHandler}}>
      <div className="App container"> 
        <NavBarComponent RoundCounter={RoundCounter}/>
        <Suspense fallback={<Loader/>}>
          <Game birds ={birds} mainBird={mainBird}/>
        </Suspense>
      </div>
    </Context.Provider>
  );
}


export default App;
