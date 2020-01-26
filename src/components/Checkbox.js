/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";
import mq from "styles/breakpoints";
import { space } from "styles/space";
import { white, brown } from "styles/colors";

const Checkbox = ({ name, value, id, onChange, selected, children }) =>
	console.log(typeof (selected === value)) || (
		<Fragment>
			<input
				css={css`
					display: none;
					-webkit-appearance: none;
				`}
				type='radio'
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				checked={selected === value}
			/>
			<label
				css={css`
					width: 100%;
					height: 80px;
					display: flex;
					flex-flow: row wrap;
					color: ${brown};
					border-radius: 5px;
					align-items: center;
					background-color: ${white};
					padding: ${space[3]}px;
					margin-bottom: ${space[4]}px;
					&[type="radio"]:checked {
						background: #333;
					}
					${mq[1]} {
						height: 200px;
						width: 220px;
						flex-flow: column wrap;
						justify-content: center;
						padding: ${space[4]}px;
						margin-bottom: 0;
					}
				`}
				htmlFor={id}
			>
				{children}
			</label>
		</Fragment>
	);

export default Checkbox;
