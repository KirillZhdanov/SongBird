import React,{useContext, useState,useEffect} from 'react';
import 'materialize-css';
import Context from '../context';

export default function PossibleAnswers({birds}) {
      const [birdsReload,getBirdsReload] = useState(0);  
        const {checkAnswer} = useContext(Context);
    const ansList = birds.map((arr,idx,) =>
    <li className = "collection-item" onClick={(event) => {checkAnswer(event,getBirdsReload,birdsReload);}}key={idx}>{arr.name}</li>
  );
    console.log(ansList);

    return (
        <div className="col s6">
           <ul className = "collection" >{ansList}</ul>
        </div>
    )
}
