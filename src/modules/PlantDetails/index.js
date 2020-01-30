/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPlantDetails } from "services/plants";

import Icon from "components/Icon";
import { gray200, gray400, light } from "styles/colors";
import { space } from "styles/space";
import { H1, H2, P } from "components/Text";
import Plantlayout from "layouts/PlantLayout";

const iconSpacing = css`
	margin: 0 10px;
`;

const PlantDetails = () => {
	const [name, setName] = useState("");
	const [plantData, setPlantData] = useState(null);
	let { id } = useParams();

	const fetchData = async () => {
		const { data } = await fetchPlantDetails({ id });
		setPlantData(data);
	};

	const handleChange = e => {
		setName(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
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
						`}
					>
						Tell us your name and e-mail and we will get in touch regarding your
						order
					</P>
					<form onSubmit={handleSubmit}>
						<label>
							Name
							<input type='text' value={name} onChange={handleChange} />
						</label>
						<input type='submit' value='Submit' />
					</form>
				</div>
			</div>
		</Plantlayout>
	);
};

export default PlantDetails;
