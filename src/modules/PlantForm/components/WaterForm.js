/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Checkbox from "components/Checkbox";
import { H1, P } from "components/Text";
import Icon from "components/Icon";
import mq from "styles/breakpoints";
import wateringcan from "assets/wateringcan.png";
import { space } from "styles/space";
import { avocado, white, brown } from "styles/colors";
import { Fragment } from "react";

const WaterForm = ({ currentStep, water, handleChange }) => {
	if (currentStep !== 2) return null;

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
				<Checkbox
					name='water'
					id='rarely'
					value='rarely'
					onChange={handleChange}
					css={css`
						background-color: ${water === "rarely" ? avocado : ""};
					`}
				>
					<Icon
						name='OneDrop'
						size='50px'
						fill={water === "rarely" ? white : avocado}
						css={customStyles}
					/>
					<P
						color={water === "rarely" ? white : ""}
						weight={water === "rarely" ? 700 : ""}
					>
						Rarely
					</P>
				</Checkbox>
				<Checkbox
					name='water'
					id='regularly'
					value='regularly'
					onChange={handleChange}
					css={css`
						background-color: ${water === "regularly" ? avocado : ""};
					`}
				>
					<Icon
						name='ThreeDrops'
						size='50px'
						fill={water === "regularly" ? white : avocado}
						css={customStyles}
					/>
					<P
						color={water === "regularly" ? white : ""}
						weight={water === "regularly" ? 700 : ""}
					>
						Regularly
					</P>
				</Checkbox>
				<Checkbox
					name='water'
					id='daily'
					value='daily'
					onChange={handleChange}
					css={css`
						background-color: ${water === "daily" ? avocado : ""};
					`}
				>
					<Icon
						name='ThreeDrops'
						size='50px'
						fill={water === "daily" ? white : avocado}
						css={customStyles}
					/>
					<P
						color={water === "daily" ? white : ""}
						weight={water === "daily" ? 700 : ""}
					>
						Daily
					</P>
				</Checkbox>
			</div>
		</Fragment>
	);
};

export default WaterForm;
