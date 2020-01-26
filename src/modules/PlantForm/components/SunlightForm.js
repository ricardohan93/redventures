/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Checkbox from "components/Checkbox";
import { P } from "components/Text";
import Icon from "components/Icon";
import mq from "styles/breakpoints";
import { space } from "styles/space";

const SunlightForm = ({ currentStep, sun, handleChange }) => {
	if (currentStep !== 1) return null;

	const customStyles = css`
		margin-right: ${space[3]}px;
		${mq[0]} {
			margin-right: 0;
		}
	`;

	return (
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
				value='high'
				id='high'
				onChange={handleChange}
				selected={sun}
			>
				<Icon name='HighSun' size='50px' fill='orange' css={customStyles} />
				<P>High sunlight</P>
			</Checkbox>
			<Checkbox
				name='sun'
				value='low'
				id='low'
				onChange={handleChange}
				selected={sun}
			>
				<Icon name='LowSun' size='50px' fill='orange' css={customStyles} />
				<P>Low sunlight</P>
			</Checkbox>
			<Checkbox
				name='sun'
				value='no'
				id='no'
				onChange={handleChange}
				selected={sun}
			>
				<Icon name='NoAnswer' size='50px' fill='orange' css={customStyles} />
				<P>No sunlight</P>
			</Checkbox>
		</div>
	);
};

export default SunlightForm;
