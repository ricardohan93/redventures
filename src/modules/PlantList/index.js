/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { H1 } from "components/Text";
import pick from "assets/pick.png";
import mq from "styles/breakpoints";
import { space } from "styles/space";
// import { Context } from "utils/context";

import Card from "components/Card";
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
					<Card plant={plant} key={plant.id} />
				))}
			</div>
		</ListLayout>
	);
};

export default PlantList;
