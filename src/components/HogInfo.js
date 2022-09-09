import React from "react";

function HogInfo({ greased, weight, specialty, medal }){
    return(
        <>
            <ul>
                <li>{specialty}</li>
                <li>{weight}</li>
                <li>{medal}</li>
                <li>{greased ? "Greased" : "Ungreased"}</li>
            </ul>
        </>
    )
}

export default HogInfo