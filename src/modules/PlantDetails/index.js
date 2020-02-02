/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";

import { fetchPlantDetails, sendFormData } from "services/plants";

import Icon from "components/Icon";
import envelop from "assets/envelop.png";
import mq from "styles/breakpoints";
import {
	gray200,
	gray400,
	light,
	brown,
	cucumber,
	red400
} from "styles/colors";
import { space } from "styles/space";
import Button from "components/Button";
import { H1, H2, P } from "components/Text";
import Plantlayout from "layouts/PlantLayout";

const iconSpacing = css`
	margin: 0 10px;
`;

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
				{plantData && (
					<div
						css={css`
							margin-bottom: ${space[5]}px;
							${mq[0]} {
								margin-bottom: 0;
							}
						`}
					>
						<H1
							size='5'
							weight='800'
							css={css`
								text-align: left;
								margin: 1rem 0;
								${mq[0]} {
									max-width: 400px;
								}
							`}
						>
							{plantData.name}
						</H1>
						<H2
							size='3'
							color={gray400}
							css={css`
								text-align: left;
								margin: 1rem 0;
							`}
						>
							${plantData.price}
						</H2>
						<img
							css={css`
								display: block;
								width: 270px;
							`}
							src={plantData.url}
							alt='plant'
						/>

						{plantData.sun === "high" && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon
									name='HighSun'
									size='25px'
									fill={light}
									css={iconSpacing}
								/>
								<P>High sunlight</P>
							</div>
						)}
						{plantData.sun === "low" && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon
									name='LowSun'
									size='25px'
									fill={light}
									css={iconSpacing}
								/>
								<P>Low sunlight</P>
							</div>
						)}
						{plantData.sun === "no" && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon
									name='NoAnswer'
									size='25px'
									fill={light}
									css={iconSpacing}
								/>
								<P>No sunlight</P>
							</div>
						)}
						{plantData.water === "regularly" && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon
									name='TwoDrops'
									size='25px'
									fill={light}
									css={iconSpacing}
								/>
								<P>Water regularly</P>
							</div>
						)}
						{plantData.water === "daily" && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon
									name='ThreeDrops'
									size='25px'
									fill={light}
									css={iconSpacing}
								/>
								<P>Water daily</P>
							</div>
						)}
						{plantData.water === "rarely" && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon
									name='OneDrop'
									size='25px'
									fill={light}
									css={iconSpacing}
								/>
								<P>Water rarely</P>
							</div>
						)}
						{plantData.toxicity === true && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon name='Toxic' size='25px' fill={light} css={iconSpacing} />
								<P>
									<span
										csss={css`
											font-weight: 800;
										`}
									>
										Beware!
									</span>{" "}
									Toxic for pets
								</P>
							</div>
						)}
						{plantData.toxicity === false && (
							<div
								css={css`
									display: flex;
									align-items: center;
								`}
							>
								<Icon name='Pet' size='25px' fill={light} css={iconSpacing} />
								<P>Non-toxic for pets</P>
							</div>
						)}
					</div>
				)}
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
						<Fragment>
							<H1
								size='4'
								weight='800'
								css={css`
									font-size: 3rem;
								`}
							>
								Thank you!
							</H1>
							<P
								size='1.8'
								css={css`
									line-height: 2.4rem;
									margin-bottom: ${space[5]}px;
								`}
							>
								You will hear from us soon. Please check your e-mail!
							</P>
							<img
								css={css`
									display: block;
									margin: 0 auto;
									width: 180px;
								`}
								src={envelop}
								alt='envelop'
							/>
						</Fragment>
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
							<form
								css={css`
									display: flex;
									flex-flow: column wrap;
								`}
							>
								<div
									css={css`
										display: flex;
										flex-flow: column wrap;
										margin-bottom: ${space[4]}px;
									`}
								>
									<label
										htmlFor='name'
										css={css`
											color: ${brown};
											font-weight: 800;
											font-size: 1.7rem;
											margin-bottom: ${space[2]}px;
										`}
									>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={form.name}
										onChange={handleChange}
										placeholder='Crazy Plant Person'
										css={css`
											padding: ${space[3]}px ${space[4]}px;
											border-radius: ${space[5]}px;
											border: none;
											&::placeholder {
												color: ${light};
												font-size: 1.4rem;
												font-weight: 500;
											}
										`}
									/>
									{warning && errors.name && (
										<div
											css={css`
												display: flex;
												align-items: center;
											`}
										>
											<Icon
												name='Warning'
												size='15px'
												fill={warning}
												css={iconSpacing}
											/>
											<P size='1.4' color={red400}>
												{errors.name}
											</P>
										</div>
									)}
								</div>
								<div
									css={css`
										display: flex;
										flex-flow: column wrap;
										margin-bottom: ${space[4]}px;
									`}
								>
									<label
										htmlFor='email'
										css={css`
											color: ${brown};
											font-weight: 800;
											font-size: 1.7rem;
											margin-bottom: ${space[2]}px;
										`}
									>
										E-mail
									</label>
									<input
										type='text'
										id='email'
										name='email'
										value={form.email}
										onChange={handleChange}
										placeholder='plantperson@email.com'
										css={css`
											padding: ${space[3]}px ${space[4]}px;
											border-radius: ${space[5]}px;
											border: none;
											&::placeholder {
												color: ${light};
												font-size: 1.4rem;
												font-weight: 500;
											}
										`}
									/>
									{warning && errors.email && (
										<div
											css={css`
												display: flex;
												align-items: center;
											`}
										>
											<Icon
												name='Warning'
												size='15px'
												fill={warning}
												css={iconSpacing}
											/>
											<P size='1.4' color={red400}>
												{errors.email}
											</P>
										</div>
									)}
								</div>
								<Button
									bg='transparent'
									color={cucumber}
									border={`1px solid ${cucumber}`}
									fill={cucumber}
									onClick={handleSubmit}
									css={css`
										margin-top: ${space[6]}px;
										align-self: flex-end;
									`}
								>
									send
								</Button>
							</form>
						</Fragment>
					)}
				</div>
			</div>
		</Plantlayout>
	);
};

export default PlantDetails;
