/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { H1, H2 } from "components/Text";
import IconLabel from "./IconLabel";

import mq from "styles/breakpoints";
import { gray400 } from "styles/colors";
import { space } from "styles/space";

const PlantData = ({ plantData }) => (
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
				font-size: 3.5rem;
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
			<IconLabel icon='HighSun' label='High sunlight' />
		)}
		{plantData.sun === "low" && (
			<IconLabel icon='LowSun' label='Low sunlight' />
		)}
		{plantData.sun === "no" && (
			<IconLabel icon='NoAnswer' label='No sunlight' />
		)}
		{plantData.water === "regularly" && (
			<IconLabel icon='TwoDrops' label='Water regularly' />
		)}
		{plantData.water === "daily" && (
			<IconLabel icon='ThreeDrops' label='Water daily' />
		)}
		{plantData.water === "rarely" && (
			<IconLabel icon='OneDrop' label='Water rarely' />
		)}
		{plantData.toxicity === true && (
			<IconLabel icon='Toxic' boldLabel='Beware!' label='Toxic for pets' />
		)}
		{plantData.toxicity === false && (
			<IconLabel icon='Pet' label='Non-toxic for pets' />
		)}
	</div>
);

export default PlantData;
