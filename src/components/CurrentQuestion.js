import React,{useRef} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import defaultImage from '../defaultBird.jpg'

export default function CurrentQuestion({mainBird,testData}) {
    const picData = useRef({name:"********"});
    
    /*const get_pic = async(birdName) =>{
        const API_KEY="72f64d9e7830f3e71adbe31757e096d2";
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=${birdName?.BirdRU}`;
        const response=axios.get(url);
        const data= await response;
        getPicData(data);
        
    }*/
    ///console.log(props.birds[0]);
    //useEffect(() => {get_pic(props.birds[0])},[props.birds]);
    //console.log((props.birds[0],picData,picData?.data?.photos?.photo[0]?.url_m));
    //const defaultImage=require('../defaultBird.jpg')
//let tmp ="********";
if(testData===mainBird.name)
picData.current=mainBird;
else
picData.current={name: "********"};
    return (
        <div  className = "random-bird rounded">
            <img className="bird-image" src={picData.current?.image||defaultImage} alt="Птыц"/>
            <div>
                <h2>{picData.current?.name}</h2>
                <ReactAudioPlayer  src={mainBird.audio} controls/>
            </div>
            
        </div>
    )
}
