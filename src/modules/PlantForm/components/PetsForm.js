/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import Checkbox from "components/Checkbox";
import { H1, P } from "components/Text";
import Icon from "components/Icon";

import dog from "assets/dog.png";

import mq from "styles/breakpoints";
import { space } from "styles/space";
import { salmon, white, brown } from "styles/colors";

const PetsForm = ({ currentStep, pets, handleChange }) => {
	if (currentStep !== 3) return null;

	const customStyles = css`
		margin-right: ${space[3]}px;
		${mq[0]} {
			margin-right: 0;
		}
	`;

	const petValues = [
		{ value: "true", icon: "Pet", label: "Yes" },
		{ value: "false", icon: "NoAnswer", label: "No/They don't care" }
	];

	return (
		<Fragment>
			<img
				css={css`
					display: block;
					margin: 0 auto;
				`}
				src={dog}
				alt='dog'
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
					justify-content: center;
					align-items: center;
					margin-bottom: ${space[6]}px;
				`}
			>
				{petValues.map(type => (
					<Checkbox
						name='pets'
						key={type.value}
						id={type.value}
						value={type.value}
						onChange={handleChange}
						css={css`
							background-color: ${pets === type.value ? salmon : ""};
							${mq[0]} {
								margin-right: ${space[5]}px;
							}
						`}
					>
						<Icon
							name={type.icon}
							size='50px'
							fill={pets === type.value ? white : salmon}
							css={customStyles}
						/>
						<P
							color={pets === type.value ? white : ""}
							weight={pets === type.value ? 700 : ""}
						>
							{type.label}
						</P>
					</Checkbox>
				))}
			</div>
		</Fragment>
	);
};

export default PetsForm;
