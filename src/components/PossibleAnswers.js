import React,{useContext} from 'react';
import 'materialize-css';
import Context from '../context';

export default function PossibleAnswers({birds}) {
    const {checkAnswer} = useContext(Context);
    const ansList = birds.map((arr,idx,) =>
    <li className = "collection-item grey darken-3" onClick={(event) => {checkAnswer(event);}}key={idx}>{arr.name}</li>
  );
    return (
        <div className="col s6">
           <ul className = "collection" >{ansList}</ul>
        </div>
    )
}
