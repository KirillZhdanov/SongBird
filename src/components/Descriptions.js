import React,{useContext,useState,useEffect} from 'react'
import 'materialize-css'
import ReactAudioPlayer from 'react-audio-player';
import Context from '../context'

export default function Descriptions({birds,testData}) {
    const {geoposition} = useContext(Context);
    const [navbarData, getNavBarData] = useState("Послушайте плеер.   Выберите птицу из списка");
    console.log("GEO",geoposition.current ==="")
   useEffect( ()=>getNavBarData(geoposition.current),[geoposition]);
    let tmp ="";
    for(const el in birds){
        if(birds[el].name === testData)
        tmp = birds[el];
        }
        if(tmp?.name)
    return (
        <div className = "col s6">
            <p>{tmp.name}</p>
            <p>{tmp.description}</p>
            <img className="bird-image" src={tmp.image} alt="Птыц"/>
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
