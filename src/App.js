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
 const [score,updateScore] = useState(ScoreCounter.current);
  const endFlag = useRef(false);
  const RoundCounterHandler = (ansData) =>{
    if(ansData===mainBird.name){
     document.querySelectorAll('.collection-item').forEach( el => {el.classList.remove('correct');el.classList.remove('incorrect');el.classList.add('grey')});
     if(RoundCounter!==5) {
     getRoundCount(RoundCounter+1);
     updateScore(ScoreCounter.current);
    }
     else{
      endFlag.current=true;
      getRoundCount(0);
      }
    }
    
  }
  
  const Reload = (e) => {getRoundCount(e);endFlag.current=false;ScoreCounter.current=0;updateScore(ScoreCounter.current+1);}
  
  let birds = birdsData[RoundCounter];
  let mainBird=birds[Math.floor((Math.random() * 5))];

  return (
    <Context.Provider value = {{RoundCounter,RoundCounterHandler,Reload}}>
      <div className="App container"> 
      <div className="flex"><div className = "logo"></div>
       <h2 className = "score">Score:{ScoreCounter.current}</h2></div>
        <NavBarComponent RoundCounter={RoundCounter}/>
        <Suspense fallback={<Loader/>}>
          <Game birds ={birds} mainBird={mainBird} ScoreCounter={ScoreCounter}  endFlag = {endFlag} score = {score}/>
        </Suspense>
      </div>
    </Context.Provider>
  );
}


export default App;
