/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { H1, H2, P } from "components/Text";
import pick from "assets/pick.png";
import mq from "styles/breakpoints";
import { space } from "styles/space";
import { cucumber, white, light } from "styles/colors";
// import { Context } from "utils/context";

import Icon from "components/Icon";
import Button from "components/Button";
import ListLayout from "layouts/ListLayout";

const mockState = [
	{
		id: 4,
		name: "Ficus lyrata",
		price: 30,
		sun: "high",
		toxicity: false,
		url: "https://front-static-recruitment.s3.amazonaws.com/ficus-lyrata.jpg",
		water: "regularly"
	},
	{
		id: 5,
		name: "Bamboo",
		price: 15,
		sun: "low",
		toxicity: true,
		url: "https://front-static-recruitment.s3.amazonaws.com/lucky-bamboo.jpg",
		water: "rarely"
	},
	{
		id: 6,
		name: "Ponytail Palm",
		price: 50,
		sun: "no",
		toxicity: false,
		url: "https://front-static-recruitment.s3.amazonaws.com/ponytail-palm.jpg",
		water: "daily"
	}
];

const iconSpacing = css`
	margin: 0 5px;
`;

const PlantList = () => {
	// const { state } = useContext(Context);
	console.log("state", mockState);

	return (
		<ListLayout>
			<img
				css={css`
					display: block;
					margin: 0 auto;
					width: 180px;
				`}
				src={pick}
				alt='pick'
			/>
			<H1
				size='5'
				weight='800'
				css={css`
					font-size: 3.5rem;
					width: 200px;
					margin: ${space[5]}px auto;
					${mq[0]} {
						width: auto;
					}
				`}
			>
				Our picks for you
			</H1>
			<div
				css={css`
					margin: 0 auto;
					width: 100%;
					display: flex;
					flex-flow: row nowrap;
					overflow-x: auto;
					-webkit-overflow-scrolling: touch;
					scroll-snap-type: x mandatory;
					scroll-behavior: smooth;
					${mq[0]} {
						width: auto;
						height: auto;
						overflow-x: unset;
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						grid-gap: ${space[4]}px;
					}
				`}
			>
				{mockState.map(plant => (
					<div
						key={plant.id}
						css={css`
							width: 100%;
							margin-right: ${space[5]}px;
							scroll-snap-align: start;
							background-color: ${white};
							padding: ${space[4]}px ${space[5]}px;
							border-radius: 5px;
							${mq[0]} {
								width: auto;
							}
						`}
					>
						<img
							css={css`
								display: block;
								margin: 0 auto;
								width: 180px;
							`}
							src={plant.url}
							alt='pick'
						/>
						<H2
							weight='800'
							color={cucumber}
							size='1.8'
							css={css`
								margin-top: 0;
								text-align: left;
							`}
						>
							{plant.name}
						</H2>
						<div
							css={css`
								display: flex;
								justify-content: space-between;
								align-items: center;
								margin-bottom: ${space[4]}px;
							`}
						>
							<P
								css={css`
									margin: 0;
								`}
							>
								${plant.price}
							</P>
							<div
								css={css`
									display: flex;
								`}
							>
								{plant.sun === "high" && (
									<Icon
										name='HighSun'
										size='20px'
										fill={light}
										css={iconSpacing}
									/>
								)}
								{plant.sun === "low" && (
									<Icon
										name='LowSun'
										size='20px'
										fill={light}
										css={iconSpacing}
									/>
								)}
								{plant.sun === "no" && (
									<Icon
										name='NoAnswer'
										size='20px'
										fill={light}
										css={iconSpacing}
									/>
								)}
								{plant.toxicity === true && (
									<Icon
										name='Toxic'
										size='20px'
										fill={light}
										css={iconSpacing}
									/>
								)}
								{plant.water === "regularly" && (
									<Icon
										name='TwoDrops'
										size='20px'
										fill={light}
										css={iconSpacing}
									/>
								)}
								{plant.water === "daily" && (
									<Icon
										name='ThreeDrops'
										size='20px'
										fill={light}
										css={iconSpacing}
									/>
								)}
								{plant.water === "rarely" && (
									<Icon
										name='OneDrop'
										size='20px'
										fill={light}
										css={iconSpacing}
									/>
								)}
							</div>
						</div>
						<Button
							width='100%'
							bg='transparent'
							color={cucumber}
							border={`1px solid ${cucumber}`}
							css={css`
								&:hover {
									background-color: ${cucumber};
									color: ${white};
								}
							`}
						>
							buy now
						</Button>
					</div>
				))}
			</div>
		</ListLayout>
	);
};

export default PlantList;
