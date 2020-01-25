/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "utils/context";
import mq from "styles/breakpoints";
import sun from "assets/sun.png";
import { brown, cucumber } from "styles/colors";

import { H1 } from "components/Text";
import FormLayout from "layouts/FormLayout";
import Button from "components/Button";
import SunlightForm from "./components/SunlightForm";
import WaterForm from "./components/WaterForm";
import PetsForm from "./components/PetsForm";
import { space } from "styles/space";

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
		console.log("handleChange", name, value);
		setData({
			[name]: value,
			currentStep: data.currentStep
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
		<FormLayout>
			<div
				css={css`
					max-width: 760px;
					margin: 0 auto;
				`}
			>
				<img
					css={css`
						display: block;
						margin: 0 auto;
					`}
					src={sun}
					alt='sunlight'
				/>
				<H1
					size='3.5'
					weight='400'
					color={brown}
					css={css`
						margin-bottom: ${space[6]}px;
					`}
				>
					First, set the amount of{" "}
					<span
						css={css`
							font-weight: 800;
						`}
					>
						sunlight
					</span>{" "}
					your plant will get
				</H1>
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
						justify-content: space-between;
					`}
				>
					{data.currentStep === 1 && (
						<Button
							bg='transparent'
							color={cucumber}
							border={`1px solid ${cucumber}`}
							icon={true}
							fill={cucumber}
							onClick={() => history.push("/")}
						>
							home
						</Button>
					)}
					{data.currentStep !== 1 && (
						<Button
							bg='transparent'
							color={cucumber}
							border={`1px solid ${cucumber}`}
							icon={true}
							fill={cucumber}
							onClick={prev}
						>
							previous
						</Button>
					)}
					{data.currentStep < 3 && (
						<Button
							bg='transparent'
							color={cucumber}
							border={`1px solid ${cucumber}`}
							icon={true}
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
							onClick={() => dispatch({ type: "FETCH", data })}
						>
							finish
						</Button>
					)}
				</div>
			</div>
		</FormLayout>
	);
};

export default PlantForm;
