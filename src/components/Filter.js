import React from 'react';

function Filter(){
    return(
        <div id="filter">
            <span className="in-filter">
            Filter by:
                <button>Name</button>
            <label id="filter-space">
                <input type="checkbox" />
                Greased
            </label>
            </span>
        </div>
    )
}

export default Filter