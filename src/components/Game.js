import React from 'react'
import CurrentQuestion from './CurrentQuestion';
import Descriptions from './Descriptions';
import PossibleAnswers from './PossibleAnswers';
import birds from '../BirdsFile';
export default function Game() {
    console.log(birds);
    return (
        <div>
            <CurrentQuestion/>
            <div className = "row "> 
                <PossibleAnswers/>
                <Descriptions/>
                <button className = "col s12  btn waves-effect waves-light">Next level</button>
            </div>
        </div>
    )
}
