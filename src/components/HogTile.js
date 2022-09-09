import React, { useState } from "react";
import HogPreview from "./HogPreview";
import HogInfo from "./HogInfo";

function HogTile({ hogs, name, image, greased, weight, specialty, medal }){
    const [showInfo, setShowInfo ] = useState(false)
    function onHogTile(){
        setShowInfo(!showInfo)
    }

    return(
        <div onClick={onHogTile} className="pigTile">
            {showInfo ? <HogInfo 
            greased={greased} 
            weight={weight} 
            specialty={specialty}
            medal={medal}/> :  <HogPreview name={name} image={image}/> }
        </div>
    )
}

export default HogTile