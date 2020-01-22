import styled from "@emotion/styled";
import mq from "styles/breakpoints";
import { space } from "styles/space";

const Layout = styled.section`
	width: 100%;
	height: 100%;
	padding: ${space[4]}px ${space[5]}px;
	${mq[0]} {
		padding: ${space[8]}px ${space[6]}px;
	}
`;

export default Layout;
