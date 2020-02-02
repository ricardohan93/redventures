/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "styles/breakpoints";
import { space } from "styles/space";

import SidebarLogo from "components/SidebarLogo";
import { ReactComponent as Logo } from "assets/logo-greenthumb.svg";

const Layout = styled.section`
	background-color: white;
	position: relative;
	width: 100%;
	height: 100%;
	padding: ${space[4]}px ${space[5]}px;
	${mq[0]} {
		height: 100vh;
		padding: ${space[8]}px ${space[6]}px;
	}
`;

const PlantLayout = ({ children }) => (
	<Layout>
		<SidebarLogo />
		<div
			css={css`
				text-align: center;
				margin-bottom: ${space[4]}px;
				${mq[1]} {
					display: none;
				}
			`}
		>
			<Logo width='200px' />
		</div>
		<div
			css={css`
				max-width: 840px;
				margin: 0 auto;
			`}
		>
			{children}
		</div>
	</Layout>
);

export default PlantLayout;
