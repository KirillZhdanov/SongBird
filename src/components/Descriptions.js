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
        <div className = "col s6 grey darken-3 description-block">
            <div className = "row pic-name" style = {{marginTop: "10px"}}>
                <div className = "col s6 picBlock">
                    <img className="bird-small-image" src={tmp.image} alt="Птыц"/>
                </div>
                <div className = "col s6 nameBlock">
                    <p>{tmp.name}</p>
                    <hr/>
                    <p>{tmp.species}</p> 
                    <ReactAudioPlayer  src={tmp.audio} controls/>
                </div>
            </div>
            <p>{tmp.description}</p>
            
           
        </div>
    )
    else
    return (
        <div className = "col s6 grey darken-3 description-block">
            <p>Послушайте плеер.<br/> Выберите птицу из списка</p>
           
        </div>
    )

}
