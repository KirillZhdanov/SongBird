import React,{useRef,useState,useContext} from 'react'
import CurrentQuestion from './CurrentQuestion';
import Descriptions from './Descriptions';
import PossibleAnswers from './PossibleAnswers';
import Context from '../context';


export default function Game({birds,mainBird}) {

     const geoposition = useRef("");
     const [ansData, getAnsData] = useState("");
     const {RoundCounterHandler} = useContext(Context);
     console.log("GAME:",geoposition.current,"MAINBIRD:",mainBird)
     const checkAnswer = (e,getBirdsReload,birdsReload)=> {
        e.target.classList.add('active');
        getAnsData(e.target.innerText);
        getBirdsReload(birdsReload+"updated");
      }
console.log("TESTDATR",ansData)
      return (
        <Context.Provider value = {{geoposition,checkAnswer}}> 
            <CurrentQuestion mainBird={mainBird} testData={ansData}/>
            <div className = "row "> 
                <PossibleAnswers birds={birds} gettestData = {getAnsData}/>
                <Descriptions birds={birds} testData={ansData}/>
                <button className = "col s12  btn waves-effect waves-light" onClick={()=>{RoundCounterHandler();}}>Next level</button>
            </div>
        </Context.Provider>
    )
}


