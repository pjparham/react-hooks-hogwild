import React from "react";
import HogTile from "./HogTile";

function HogContainer({ hogs }){
    const hogTiles = hogs.map((hog) => {
        return(
            <HogTile 
            name={hog.name} 
            image={hog.image}
            greased={hog.greased}
            medal={hog['highest medal achieved']}
            specialty={hog.specialty}
            weight={hog.weight}
            key={hog.id} />
        )
    }) 

    return(
        <div className="ui grid container">
            {hogTiles}
        </div>
    )
}

export default HogContainer