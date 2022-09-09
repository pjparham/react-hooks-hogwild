import React from "react";

function HogPreview({ name, image }){
    return(
       <>
            <img src={image} alt="cute pig"/>
            <p>{name}</p>
        </>
    )
}

export default HogPreview