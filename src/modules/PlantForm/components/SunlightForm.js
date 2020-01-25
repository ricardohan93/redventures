/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Checkbox from "components/Checkbox";
import { P } from "components/Text";
import { ReactComponent as HighSun } from "assets/white/high-sun.svg";
import { ReactComponent as LowSun } from "assets/white/low-sun.svg";
import { ReactComponent as NoSun } from "assets/white/no-answer.svg";
import mq from "styles/breakpoints";
import { space } from "styles/space";

const SunlightForm = ({ currentStep, sun, handleChange }) => {
	if (currentStep !== 1) return null;

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
				<HighSun width='50px' fill='orange' />
				<P>High sunlight</P>
			</Checkbox>
			<Checkbox
				name='sun'
				value='low'
				id='low'
				onChange={handleChange}
				selected={sun}
			>
				<LowSun width='50px' fill='orange' />
				<P>Low sunlight</P>
			</Checkbox>
			<Checkbox
				name='sun'
				value='no'
				id='no'
				onChange={handleChange}
				selected={sun}
			>
				<NoSun width='50px' fill='orange' />
				<P>No sunlight</P>
			</Checkbox>
		</div>
	);
};

export default SunlightForm;
