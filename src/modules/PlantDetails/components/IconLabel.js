/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Icon from "components/Icon";
import { P } from "components/Text";

import { light } from "styles/colors";

const iconSpacing = css`
	margin: 0 10px;
`;

const IconLabel = ({ icon, label, boldLabel }) => (
	<div
		css={css`
			display: flex;
			align-items: center;
		`}
	>
		<Icon name={icon} size='25px' fill={light} css={iconSpacing} />
		<P>
			{boldLabel && (
				<span
					css={css`
						font-weight: 800;
					`}
				>
					{boldLabel}
				</span>
			)}{" "}
			{label}
		</P>
	</div>
);

export default IconLabel;
