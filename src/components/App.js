import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
console.log(hogs.sort((a,b) => a.weight-b.weight))
	const [showHogs, setShowHogs] = useState(hogs)
	
	const hogsToDisplay = showHogs
		.sort((hog1, hog2) => {
			return hog1.name.localeCompare(hog2.name)
		})

	return (
		<div className="App">
			<Nav />
			<Filter />
			<hr/>
			<HogContainer hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;
