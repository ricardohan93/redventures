/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { cucumber, white } from "styles/colors";
import { space } from "styles/space";
import { ReactComponent as Arrow } from "assets/arrow.svg";

const Button = ({
	width = 170,
	height = 50,
	color = white,
	bg = cucumber,
	icon = false,
	fill = white,
	weight = 400,
	children
}) => (
	<button
		css={css`
			width: ${width}px;
			height: ${height}px;
			color: ${color};
			background-color: ${bg};
			border-radius: 25px;
			border: none;
			font-size: 1.6rem;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: ${weight};
		`}
	>
		{icon && (
			<Arrow
				width='20'
				height='20'
				fill={fill}
				style={{ marginRight: space[3] }}
			/>
		)}
		{children}
	</button>
);

export default Button;
