import React from "react";

function HogPreview({ name, image }){
    return(
       <>
            <h2>{name}</h2>
            <img src={image} alt="cute pig"/>
        </>
    )
}

export default HogPreview