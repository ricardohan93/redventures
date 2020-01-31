/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPlantDetails } from "services/plants";

import Icon from "components/Icon";
import mq from "styles/breakpoints";
import { gray200, gray400, light, brown, cucumber } from "styles/colors";
import { space } from "styles/space";
import Button from "components/Button";
import { H1, H2, P } from "components/Text";
import Plantlayout from "layouts/PlantLayout";

const iconSpacing = css`
	margin: 0 10px;
`;

const PlantDetails = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [plantData, setPlantData] = useState(null);
	let { id } = useParams();

	const fetchData = async () => {
		const { data } = await fetchPlantDetails({ id });
		setPlantData(data);
	};

	const handleNameChange = e => {
		setName(e.target.value);
	};

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		// validate form
		console.log("submitted");
	};

	useEffect(() => {
		fetchData();
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
					<div>
						<H1
							size='5'
							weight='800'
							css={css`
								text-align: left;
								margin: 1rem 0;
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
							alt='plant image'
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
							min-width: 410px;
						}
					`}
				>
					<H1
						size='4'
						weight='800'
						css={css`
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
						Tell us your name and e-mail and we will get in touch regarding your
						order ;{`)`}
					</P>
					<form
						css={css`
							display: flex;
							flex-flow: column wrap;
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
							value={name}
							onChange={handleNameChange}
							placeholder='Crazy Plant Person'
							css={css`
								padding: ${space[3]}px ${space[4]}px;
								border-radius: ${space[5]}px;
								border: none;
								margin-bottom: ${space[4]}px;
								&::placeholder {
									color: ${light};
									font-size: 1.4rem;
									font-weight: 500;
								}
							`}
						/>
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
							value={email}
							onChange={handleEmailChange}
							placeholder='plantperson@email.com'
							css={css`
								padding: ${space[3]}px ${space[4]}px;
								border-radius: ${space[5]}px;
								border: none;
								margin-bottom: ${space[4]}px;
								&::placeholder {
									color: ${light};
									font-size: 1.4rem;
									font-weight: 500;
								}
							`}
						/>
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
				</div>
			</div>
		</Plantlayout>
	);
};

export default PlantDetails;
