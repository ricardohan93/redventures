/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Icon from "components/Icon";
import { P } from "components/Text";

import { red400 } from "styles/colors";

const iconSpacing = css`
	margin: 0 10px;
`;

const ErrorLabel = ({ children }) => (
	<div
		css={css`
			display: flex;
			align-items: center;
		`}
	>
		<Icon name='Warning' size='15px' fill={red400} css={iconSpacing} />
		<P size='1.4' color={red400}>
			{children}
		</P>
	</div>
);

export default ErrorLabel;
