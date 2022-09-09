import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
	const [showHogs, setShowHogs] = useState(hogs)
	const [checked, setChecked] = useState(false)
	const [sortName, setSortName] = useState(true)
	
	const hogsToDisplay = showHogs
		.sort((hog1, hog2) => {
			if(sortName === true){
				return hog1.name.localeCompare(hog2.name)
			}
			else { return hog1.weight-hog2.weight}
		})
		.filter((hog) => {
			if (checked === true){
				return hog.greased === true
			}
			else{ return true }
		})

	return (
		<div className="App">
			<Nav />
			<Filter sortName={sortName} setSortName={setSortName} checked={checked} setChecked={setChecked}/>
			<hr/>
			<HogContainer hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;
