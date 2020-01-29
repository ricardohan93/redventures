/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Checkbox from "components/Checkbox";
import { H1, P } from "components/Text";
import Icon from "components/Icon";
import mq from "styles/breakpoints";
import dog from "assets/dog.png";
import { space } from "styles/space";
import { salmon, white, brown } from "styles/colors";
import { Fragment } from "react";

const PetsForm = ({ currentStep, pets, handleChange }) => {
	if (currentStep !== 3) return null;

	const customStyles = css`
		margin-right: ${space[3]}px;
		${mq[0]} {
			margin-right: 0;
		}
	`;

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
				<Checkbox
					name='pets'
					id='true'
					value='true'
					onChange={handleChange}
					css={css`
						background-color: ${pets === "true" ? salmon : ""};
						${mq[0]} {
							margin-right: ${space[5]}px;
						}
					`}
				>
					<Icon
						name='Pet'
						size='50px'
						fill={pets === "true" ? white : salmon}
						css={customStyles}
					/>
					<P
						color={pets === "true" ? white : ""}
						weight={pets === "true" ? 700 : ""}
					>
						Yes
					</P>
				</Checkbox>
				<Checkbox
					name='pets'
					id='false'
					value='false'
					onChange={handleChange}
					css={css`
						background-color: ${pets === "false" ? salmon : ""};
					`}
				>
					<Icon
						name='NoAnswer'
						size='50px'
						fill={pets === "false" ? white : salmon}
						css={customStyles}
					/>
					<P
						color={pets === "false" ? white : ""}
						weight={pets === "false" ? 700 : ""}
					>
						No/They don't care
					</P>
				</Checkbox>
			</div>
		</Fragment>
	);
};

export default PetsForm;
