/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import Checkbox from "components/Checkbox";
import { H1, P } from "components/Text";
import Icon from "components/Icon";

import wateringcan from "assets/wateringcan.png";

import mq from "styles/breakpoints";
import { space } from "styles/space";
import { avocado, white, brown } from "styles/colors";

const WaterForm = ({ currentStep, water, handleChange }) => {
	if (currentStep !== 2) return null;

	const customStyles = css`
		margin-right: ${space[3]}px;
		${mq[0]} {
			margin-right: 0;
		}
	`;

	const waterValues = [
		{ value: "rarely", icon: "OneDrop", label: "Rarely" },
		{ value: "regularly", icon: "ThreeDrops", label: "Regularly" },
		{ value: "daily", icon: "ThreeDrops", label: "Daily" }
	];

	return (
		<Fragment>
			<img
				css={css`
					display: block;
					margin: 0 auto;
				`}
				src={wateringcan}
				alt='watering can'
			/>
			<H1
				size='3.5'
				weight='400'
				color={brown}
				css={css`
					font-size: 2.3rem;
					margin-bottom: ${space[6]}px;
					${mq[0]} {
						max-width: 600px;
						margin-left: auto;
						margin-right: auto;
					}
				`}
			>
				How often do you want to{" "}
				<span
					css={css`
						font-weight: 800;
					`}
				>
					water
				</span>{" "}
				your plant?
			</H1>
			<div
				css={css`
					width: 100%;
					display: flex;
					flex-flow: row wrap;
					justify-content: space-between;
					align-items: center;
					margin-bottom: ${space[6]}px;
				`}
			>
				{waterValues.map(type => (
					<Checkbox
						name='water'
						key={type.value}
						id={type.value}
						value={type.value}
						onChange={handleChange}
						css={css`
							background-color: ${water === type.value ? avocado : ""};
						`}
					>
						<Icon
							name={type.icon}
							size='50px'
							fill={water === type.value ? white : avocado}
							css={customStyles}
						/>
						<P
							color={water === type.value ? white : ""}
							weight={water === type.value ? 700 : ""}
						>
							{type.label}
						</P>
					</Checkbox>
				))}
			</div>
		</Fragment>
	);
};

export default WaterForm;
