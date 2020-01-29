/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Checkbox from "components/Checkbox";
import { H1, P } from "components/Text";
import Icon from "components/Icon";
import mq from "styles/breakpoints";
import sun_image from "assets/sun.png";
import { space } from "styles/space";
import { salmon, white, brown } from "styles/colors";
import { Fragment } from "react";

const SunlightForm = ({ currentStep, sun, handleChange }) => {
	if (currentStep !== 1) return null;

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
				<Checkbox
					name='sun'
					id='high'
					value='high'
					onChange={handleChange}
					css={css`
						background-color: ${sun === "high" ? salmon : ""};
					`}
				>
					<Icon
						name='HighSun'
						size='50px'
						fill={sun === "high" ? white : "orange"}
						css={customStyles}
					/>
					<P
						color={sun === "high" ? white : ""}
						weight={sun === "high" ? 700 : ""}
					>
						High sunlight
					</P>
				</Checkbox>
				<Checkbox
					name='sun'
					id='low'
					value='low'
					onChange={handleChange}
					css={css`
						background-color: ${sun === "low" ? salmon : ""};
					`}
				>
					<Icon
						name='LowSun'
						size='50px'
						fill={sun === "low" ? white : "orange"}
						css={customStyles}
					/>
					<P
						color={sun === "low" ? white : ""}
						weight={sun === "low" ? 700 : ""}
					>
						Low sunlight
					</P>
				</Checkbox>
				<Checkbox
					name='sun'
					id='no'
					value='no'
					onChange={handleChange}
					css={css`
						background-color: ${sun === "no" ? salmon : ""};
					`}
				>
					<Icon
						name='NoAnswer'
						size='50px'
						fill={sun === "no" ? white : "orange"}
						css={customStyles}
					/>
					<P color={sun === "no" ? white : ""} weight={sun === "no" ? 700 : ""}>
						No sunlight
					</P>
				</Checkbox>
			</div>
		</Fragment>
	);
};

export default SunlightForm;
