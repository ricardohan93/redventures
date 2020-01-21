import React, { useContext } from "react";
import { Context } from "utils/context";

const formData = {
	sun: "high",
	water: "daily",
	pets: false
};

const PlantForm = () => {
	const { dispatch } = useContext(Context);

	return (
		// after fill all form
		<button onClick={() => dispatch({ type: "FETCH", data: formData })}>
			finish
		</button>
	);
};

export default PlantForm;
