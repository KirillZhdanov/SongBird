import React,{useEffect} from 'react'
import 'materialize-css'
import ReactAudioPlayer from 'react-audio-player';

export default function Descriptions({birds,testData,mainBird}) {
  useEffect(()=>console.log("Ответ: ",mainBird.name),[mainBird]); 
    let tmp ="";
    for(const el in birds){
        if(birds[el].name === testData)
        tmp = birds[el];
        }
        if(tmp?.name)
    return (
        <div className = "col s6 grey darken-3">
            <div style={{display:'flex'}}>
                <img className="bird-image" src={tmp.image} alt="Птыц"/>
                <div>
                    <p>{tmp.name}</p>
                    <hr/>
                    <p>{tmp.species}</p>
                </div>
            </div>
            <p>{tmp.description}</p>
            
            <ReactAudioPlayer  src={tmp.audio} controls/>
        </div>
    )
    else
    return (
        <div className = "col s6">
            <p>Послушайте плеер.<br/> Выберите птицу из списка</p>
           
        </div>
    )

}
