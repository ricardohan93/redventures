/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "utils/context";
import mq from "styles/breakpoints";
import { cucumber } from "styles/colors";

import { fetchPlants } from "services/plants";

import FormLayout from "layouts/FormLayout";
import Button from "components/Button";
import SunlightForm from "./components/SunlightForm";
import WaterForm from "./components/WaterForm";
import PetsForm from "./components/PetsForm";
import { space } from "styles/space";

const initialForm = {
	currentStep: 1,
	sun: "high",
	water: "rarely",
	pets: "true"
};

const PlantForm = () => {
	let history = useHistory();
	const [data, setData] = useState(initialForm);
	const { dispatch } = useContext(Context);

	const handleChange = e => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const next = () => {
		let currentStep = data.currentStep;
		// If the current step is 1 or 2, then add one on "next" button click
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		setData({
			...data,
			currentStep
		});
	};

	const prev = () => {
		let currentStep = data.currentStep;
		// If the current step is 2 or 3, then subtract one on "previous" button click
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		setData({
			...data,
			currentStep
		});
	};

	const fetchData = async () => {
		const { data: list } = await fetchPlants(data);
		dispatch({ type: "FETCH", list });

		history.push("/plant-list");
	};

	return (
		<FormLayout>
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
			<div
				css={css`
					width: 100%;
					display: flex;
					flex-flow: column wrap;
					align-items: center;
					${mq[0]} {
						flex-flow: row wrap;
						justify-content: space-between;
					}
				`}
			>
				{data.currentStep === 1 && (
					<Button
						bg='transparent'
						color={cucumber}
						border={`1px solid ${cucumber}`}
						backIcon={true}
						fill={cucumber}
						onClick={() => history.push("/")}
						css={css`
							margin-bottom: ${space[4]}px;
							${mq[0]} {
								margin-bottom: 0;
							}
						`}
					>
						home
					</Button>
				)}
				{data.currentStep !== 1 && (
					<Button
						bg='transparent'
						color={cucumber}
						border={`1px solid ${cucumber}`}
						backIcon={true}
						fill={cucumber}
						onClick={prev}
						css={css`
							margin-bottom: ${space[4]}px;
							${mq[0]} {
								margin-bottom: 0;
							}
						`}
					>
						previous
					</Button>
				)}
				{data.currentStep < 3 && (
					<Button
						border={`1px solid ${cucumber}`}
						icon={true}
						bg='transparent'
						color={cucumber}
						fill={cucumber}
						onClick={next}
					>
						next
					</Button>
				)}
				{data.currentStep === 3 && (
					<Button
						bg='transparent'
						color={cucumber}
						border={`1px solid ${cucumber}`}
						icon={true}
						fill={cucumber}
						onClick={fetchData}
					>
						finish
					</Button>
				)}
			</div>
		</FormLayout>
	);
};

export default PlantForm;
