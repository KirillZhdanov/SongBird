import React,{useRef,useState,useContext} from 'react'
import CurrentQuestion from './CurrentQuestion';
import Descriptions from './Descriptions';
import PossibleAnswers from './PossibleAnswers';
import GameResult from './GameResult'
import Context from '../context';


export default function Game({birds,mainBird,ScoreCounter,endFlag}) {
     
    const flag = useRef(false);
    const currentRoundScore = useRef(5);
    const [ansData, getAnsData] = useState("");
    const {RoundCounterHandler} = useContext(Context);
    
    const checkAnswer = (e)=> {
      if(!flag.current){
         e.target.classList.remove('grey');
        if( e.target.innerText === mainBird.name){
            e.target.classList.add('correct');
            ScoreCounter.current += currentRoundScore.current;
            currentRoundScore.current = 5;
        }
        else{
            e.target.classList.add('incorrect');
            currentRoundScore.current -= 1;
        }
        flag.current=e.target.classList.contains('correct');
        getAnsData(e.target.innerText);
        }
    }
    if(!endFlag.current)
      return (
        <Context.Provider value = {{checkAnswer}}> 
            <CurrentQuestion mainBird = {mainBird} testData={ansData}/>
            <div className = "row "> 
                <PossibleAnswers birds={birds} gettestData = {getAnsData}/>
                <Descriptions birds={birds} testData = {ansData} mainBird={mainBird}/>
                <button className = "col s12  btn waves-effect waves-light" onClick={()=>{RoundCounterHandler(ansData);flag.current=false}}>Next level</button>
            </div>
        </Context.Provider>
    )
    else
    return (<GameResult ScoreCounter = {ScoreCounter} getAnsData={getAnsData} />);
}


