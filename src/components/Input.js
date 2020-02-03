/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { light } from "styles/colors";
import { space } from "styles/space";

const Input = ({ type = "text", name, value, onChange, placeholder }) => (
	<input
		type={type}
		id={name}
		name={name}
		value={value}
		onChange={onChange}
		placeholder={placeholder}
		css={css`
			padding: ${space[3]}px ${space[4]}px;
			border-radius: ${space[5]}px;
			border: none;
			&::placeholder {
				color: ${light};
				font-size: 1.4rem;
				font-weight: 500;
			}
		`}
	/>
);

export default Input;
