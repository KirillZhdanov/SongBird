import React,{useRef} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import defaultImage from '../defaultBird.jpg'

export default function CurrentQuestion({mainBird,testData}) {
    const picData = useRef({name:"********"});
    
    if(testData===mainBird.name)
    picData.current=mainBird;
    else
    picData.current={name: "********"};
        return (
            <div  className = "random-bird">
                <img className="bird-image" src={picData.current?.image||defaultImage} alt="Птыц"/>
                <div className = "main-Bird">
                    <h2>{picData.current?.name}</h2>
                    <hr/>
                    <ReactAudioPlayer  src={mainBird.audio} controls/>
                </div>
                
            </div>
        )
}
