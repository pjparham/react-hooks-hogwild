import React from "react";

function HogInfo({ greased, weight, specialty, medal, name, image }){
    function medalEmoji(medal){
        if (medal === "gold"){
            return "🥇"
        }
        else if (medal === "diamond"){
            return "💎"
        }
        else if (medal === "platinum"){
            return "💿"
        }
        else if(medal === "bronze"){
            return "🥉"
        }
        else if(medal === "silver"){
            return "🥈"
        }
        else {return ""}
    }

    return(
        <div id="info">
             <p><b>{name}</b></p>
            <img src={image} alt="little pig"/>
            <ul>
                <li>• {specialty}</li>
                <li>• {greased ? "Greased" : "Ungreased"}</li>
                <li>• {weight} lbs</li>
                <li>• {medal.charAt(0).toUpperCase() + medal.slice(1) + medalEmoji(medal)}</li>
            </ul>
        </div>
    )
}

export default HogInfo