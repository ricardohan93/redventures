/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import Checkbox from "components/Checkbox";
import { H1, P } from "components/Text";
import Icon from "components/Icon";

import sun_image from "assets/sun.png";

import mq from "styles/breakpoints";
import { space } from "styles/space";
import { salmon, white, brown } from "styles/colors";

const SunlightForm = ({ currentStep, sun, handleChange }) => {
	if (currentStep !== 1) return null;

	const customStyles = css`
		margin-right: ${space[3]}px;
		${mq[0]} {
			margin-right: 0;
		}
	`;

	const sunlightValues = [
		{ value: "high", icon: "HighSun", label: "High sunlight" },
		{ value: "low", icon: "LowSun", label: "Low sunlight" },
		{ value: "no", icon: "NoAnswer", label: "No sunlight" }
	];

	return (
		<Fragment>
			<img
				css={css`
					display: block;
					margin: 0 auto;
				`}
				src={sun_image}
				alt='sunlight'
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
				{sunlightValues.map(type => (
					<Checkbox
						name='sun'
						id={type.value}
						key={type.value}
						value={type.value}
						onChange={handleChange}
						css={css`
							background-color: ${sun === type.value ? salmon : ""};
						`}
					>
						<Icon
							name={type.icon}
							size='50px'
							fill={sun === type.value ? white : "orange"}
							css={customStyles}
						/>
						<P
							color={sun === type.value ? white : ""}
							weight={sun === type.value ? 700 : ""}
						>
							{type.label}
						</P>
					</Checkbox>
				))}
			</div>
		</Fragment>
	);
};

export default SunlightForm;
