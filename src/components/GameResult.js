import React,{ useContext } from "react";
import Context from '../context';


export default function GameResult({ScoreCounter,getAnsData}) {
    const {Reload} = useContext(Context);
    if(ScoreCounter.current>26)
    return (     
         <div className = "jumbotron game-over"> 
        <h1 className = "display-3 text-center">Поздравляем!</h1>
        <p className = "lead text-center">Вы истинный знаток птичьих голосов. Набрано {ScoreCounter.current} из 30 возможных баллов</p>
        <hr className = "my-4"/>
        <button className = "btn btn-next btn-game-over" onClick={()=>{Reload(0);getAnsData("");}}>Сыграть снова</button>
       </div>  
    )
    else return (     
        <div className = "jumbotron game-over"> 
       <h1 className = "display-3 text-center">Неплохо!</h1>
       <p className = "lead text-center">Вы прошли викторину и набрали {ScoreCounter.current} из 30 возможных баллов. Попробуйте ещё раз :3</p>
       <hr className = "my-4"/>
       <button className = "btn btn-next btn-game-over" onClick={()=>{Reload(0);getAnsData("");}}>Попробовать еще раз!</button>
      </div>  
   )
}
