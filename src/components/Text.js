/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import mq from "styles/breakpoints";
import { dark, brown } from "styles/colors";

const H1 = ({ size, weight = 600, color = dark, children, ...props }) => (
	<h1
		css={css`
			font-size: ${size - 3.5}rem;
			text-align: center;
			color: ${color};
			font-weight: ${weight};
			${mq[0]} {
				font-size: ${size}rem;
			}
		`}
		{...props}
	>
		{children}
	</h1>
);

const H2 = ({ size, weight = 600, color = dark, children, ...props }) => (
	<h2
		css={css`
			font-size: ${size}rem;
			text-align: center;
			color: ${color};
			font-weight: ${weight};
		`}
		{...props}
	>
		{children}
	</h2>
);

const P = ({ size = 1.6, weight = 400, color = brown, children, ...props }) => (
	<p
		css={css`
			font-size: ${size}rem;
			text-align: center;
			color: ${color};
			font-weight: ${weight};
		`}
		{...props}
	>
		{children}
	</p>
);

export { H1, H2, P };
