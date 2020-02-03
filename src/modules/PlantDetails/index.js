/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";

import Plantlayout from "layouts/PlantLayout";
import { H1, P } from "components/Text";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
import PlantData from "./components/PlantData";

import mq from "styles/breakpoints";
import { gray200 } from "styles/colors";
import { space } from "styles/space";
import { fetchPlantDetails, sendFormData } from "services/plants";

const PlantDetails = () => {
	const [form, setForm] = useState({
		name: "",
		email: ""
	});
	const [errors, setErrors] = useState({
		name: "Please provide a valid name",
		email: "Please provide a valid e-mail"
	});
	const [warning, setWarning] = useState(false);
	const [plantData, setPlantData] = useState(null);
	const [submitted, setSubmitted] = useState(false);
	let { id } = useParams();

	const fetchPlantData = async () => {
		const { data } = await fetchPlantDetails({ id });
		setPlantData(data);
	};

	const validateEmail = email => {
		let emailError;

		if (/.+@.+\..+/g.test(email)) {
			emailError = "";
		} else {
			emailError = "Please provide a valid e-mail";
		}

		setErrors({
			...errors,
			email: emailError
		});
	};

	const validateName = name => {
		let nameError;

		if (/\w+\s\w+/.test(name)) {
			nameError = "";
		} else {
			nameError = "Please provide a valid name";
		}

		setErrors({
			...errors,
			name: nameError
		});
	};

	const handleChange = e => {
		setWarning(false);
		const name = e.target.name;
		const value = e.target.value;

		if (name === "email") {
			validateEmail(value);
		}
		if (name === "name") {
			validateName(value);
		}

		setForm({
			...form,
			[name]: value
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (
			form.name.length === 0 ||
			errors.name ||
			form.email.length === 0 ||
			errors.email
		) {
			console.log("ERROR");
			setWarning(true);
			return;
		}

		try {
			await sendFormData({
				sun: plantData.sun,
				water: plantData.water,
				pets: !plantData.toxicity,
				name: form.name,
				email: form.email,
				id
			});
			setSubmitted(true);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		fetchPlantData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Plantlayout>
			<div
				css={css`
					display: flex;
					flex-flow: row wrap;
					justify-content: space-between;
				`}
			>
				{plantData && <PlantData plantData={plantData} />}
				<div
					css={css`
						background-color: ${gray200};
						border-radius: 5px;
						padding: ${space[5]}px;
						${mq[0]} {
							max-width: 410px;
							min-width: 410px;
						}
					`}
				>
					{submitted ? (
						<ThankYou />
					) : (
						<Fragment>
							<H1
								size='4'
								weight='800'
								css={css`
									font-size: 3rem;
									text-align: left;
								`}
							>
								Nice pick!
							</H1>
							<P
								size='1.8'
								css={css`
									max-width: 270px;
									text-align: left;
									line-height: 2.4rem;
									margin-bottom: ${space[5]}px;
								`}
							>
								Tell us your name and e-mail and we will get in touch regarding
								your order ;{`)`}
							</P>
							<Form
								form={form}
								handleSubmit={handleSubmit}
								handleChange={handleChange}
								errors={errors}
								warning={warning}
							/>
						</Fragment>
					)}
				</div>
			</div>
		</Plantlayout>
	);
};

export default PlantDetails;
