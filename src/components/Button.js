/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { cucumber, white } from "styles/colors";
import { space } from "styles/space";
import Icon from "components/Icon";

const Button = ({
	width = "170px",
	height = "50px",
	color = white,
	bg = cucumber,
	border = "none",
	icon = false,
	backIcon = false,
	fill = white,
	weight = 400,
	onClick,
	children,
	...props
}) => (
	<button
		css={css`
			width: ${width};
			height: ${height};
			color: ${color};
			background-color: ${bg};
			border-radius: 25px;
			border: ${border};
			font-size: 1.6rem;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: ${weight};
		`}
		{...props}
		type='button'
		onClick={onClick}
	>
		{icon && (
			<Icon
				name='Arrow'
				size='20'
				fill={fill}
				style={{ marginRight: `${space[3]}px` }}
			/>
		)}
		{backIcon && (
			<Icon
				name='BackArrow'
				size='20'
				fill={fill}
				style={{ marginRight: `${space[3]}px` }}
			/>
		)}
		{children}
	</button>
);

export default Button;
