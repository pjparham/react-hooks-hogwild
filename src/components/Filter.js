import React from 'react';

function Filter({ checked, setChecked, sortName, setSortName }){
    function handleCheck(){
        setChecked(!checked)
    }

    function handleFilter(){
        setSortName(!sortName)
    }


    return(
        <div id="filter">
            <span className="in-filter">
            Filter by:
                <button onClick={handleFilter}>{sortName ? 'Name' : 'Weight' }</button>
            <label id="filter-space">
                <input type="checkbox"
                onChange={handleCheck} 
                checked={checked}/>
                Greased
            </label>
            </span>
        </div>
    )
}

export default Filter