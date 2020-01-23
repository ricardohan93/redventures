import React, { useContext, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "utils/context";

import Button from "components/Button";
import SunlightForm from "./components/SunlightForm";
import WaterForm from "./components/WaterForm";
import PetsForm from "./components/PetsForm";

const initialForm = {
	currentStep: 1,
	sun: "",
	water: "",
	pets: false
};

const PlantForm = () => {
	let history = useHistory();
	const [data, setData] = useState(initialForm);
	const { dispatch } = useContext(Context);

	const handleChange = e => {
		const { name, value } = e.target;
		setData({
			[name]: value
		});
	};

	const next = () => {
		let currentStep = data.currentStep;
		// If the current step is 1 or 2, then add one on "next" button click
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		setData({
			currentStep
		});
	};

	const prev = () => {
		let currentStep = data.currentStep;
		// If the current step is 2 or 3, then subtract one on "previous" button click
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		setData({
			currentStep
		});
	};

	return (
		<Fragment>
			<form>
				<SunlightForm
					currentStep={data.currentStep}
					handleChange={handleChange}
					sun={data.sun}
				/>
				<WaterForm
					currentStep={data.currentStep}
					handleChange={handleChange}
					water={data.water}
				/>
				<PetsForm
					currentStep={data.currentStep}
					handleChange={handleChange}
					pets={data.pets}
				/>
				{data.currentStep === 1 && (
					<Button onClick={() => history.push("/")}>Home</Button>
				)}
				{data.currentStep !== 1 && <Button onClick={prev}>Previous</Button>}
				{data.currentStep < 3 && <Button onClick={next}>Next</Button>}
				{data.currentStep === 3 && (
					<Button onClick={() => dispatch({ type: "FETCH", data })}>
						Finish
					</Button>
				)}
			</form>
		</Fragment>
	);
};

export default PlantForm;
