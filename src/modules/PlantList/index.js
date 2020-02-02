/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { H1 } from "components/Text";
import pick from "assets/pick.png";
import mq from "styles/breakpoints";
import { space } from "styles/space";
import { Context } from "utils/context";

import Card from "components/Card";
import ListLayout from "layouts/ListLayout";

const PlantList = () => {
	const { state } = useContext(Context);

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
				{state.map(plant => (
					<Card plant={plant} key={plant.id} />
				))}
			</div>
		</ListLayout>
	);
};

export default PlantList;
