/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import mq from "styles/breakpoints";

const H1 = ({ size, weight = 600, children, ...props }) => (
	<h1
		css={css`
			font-size: ${size - 3.5}rem;
			text-align: center;
			${mq[0]} {
				font-size: ${size}rem;
				font-weight: ${weight};
			}
		`}
		{...props}
	>
		{children}
	</h1>
);

export { H1 };
