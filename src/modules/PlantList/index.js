import React, { useContext } from "react";
import { Context } from "utils/context";

const PlantList = () => {
	const { state } = useContext(Context);
	console.log(state);
	return (
		<div>
			<h1>PlantList</h1>
		</div>
	);
};

export default PlantList;
