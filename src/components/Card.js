/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";
import { H2, P } from "components/Text";
import mq from "styles/breakpoints";
import { space } from "styles/space";
import { cucumber, white, light } from "styles/colors";

import Icon from "components/Icon";
import Button from "components/Button";

const iconSpacing = css`
	margin: 0 5px;
`;

const Card = ({ plant }) => {
	let history = useHistory();
	return (
		<div
			css={css`
				width: 100%;
				margin-right: ${space[5]}px;
				scroll-snap-align: start;
				background-color: ${white};
				padding: ${space[4]}px ${space[5]}px;
				border-radius: 5px;
				${mq[0]} {
					width: auto;
				}
			`}
		>
			<img
				css={css`
					display: block;
					margin: 0 auto;
					width: 180px;
				`}
				src={plant.url}
				alt='pick'
			/>
			<H2
				weight='800'
				color={cucumber}
				size='1.8'
				css={css`
					margin-top: 0;
					text-align: left;
				`}
			>
				{plant.name}
			</H2>
			<div
				css={css`
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: ${space[4]}px;
				`}
			>
				<P
					css={css`
						margin: 0;
					`}
				>
					${plant.price}
				</P>
				<div
					css={css`
						display: flex;
					`}
				>
					{plant.sun === "high" && (
						<Icon name='HighSun' size='20px' fill={light} css={iconSpacing} />
					)}
					{plant.sun === "low" && (
						<Icon name='LowSun' size='20px' fill={light} css={iconSpacing} />
					)}
					{plant.sun === "no" && (
						<Icon name='NoAnswer' size='20px' fill={light} css={iconSpacing} />
					)}
					{plant.toxicity === true && (
						<Icon name='Toxic' size='20px' fill={light} css={iconSpacing} />
					)}
					{plant.water === "regularly" && (
						<Icon name='TwoDrops' size='20px' fill={light} css={iconSpacing} />
					)}
					{plant.water === "daily" && (
						<Icon
							name='ThreeDrops'
							size='20px'
							fill={light}
							css={iconSpacing}
						/>
					)}
					{plant.water === "rarely" && (
						<Icon name='OneDrop' size='20px' fill={light} css={iconSpacing} />
					)}
				</div>
			</div>
			<Button
				width='100%'
				bg='transparent'
				color={cucumber}
				border={`1px solid ${cucumber}`}
				onClick={() => history.push(`/plant/${plant.id}`)}
				css={css`
					&:hover {
						background-color: ${cucumber};
						color: ${white};
					}
				`}
			>
				buy now
			</Button>
		</div>
	);
};

export default Card;
