/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logo-greenthumb.svg";
import { H1 } from "components/Text";
import Button from "components/Button";
import Layout from "layouts/Layout";
import illustration_home from "assets/illustration-home.png";
import illustration_home_mobile from "assets/illustration-home-mobile.png";
import { space } from "styles/space";
import mq from "styles/breakpoints";

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: ${({ marginBottom }) => (marginBottom ? `${space[4]}px` : 0)};
	${mq[0]} {
		display: block;
		max-width: 420px;
	}
`;

const Home = () => {
	let history = useHistory();

	const goToForm = () => {
		history.push("/plant-form");
	};

	return (
		<Layout>
			<div
				css={css`
					display: flex;
					flex-flow: row wrap;
					justify-content: center;
				`}
			>
				<Wrap marginBottom>
					<Logo
						css={css`
							margin-bottom: ${space[4]}px;
							${mq[0]} {
								margin-bottom: ${space[6]}px;
							}
						`}
						width='200px'
					/>
					<Wrap>
						<H1
							size='7'
							weight='800'
							css={css`
								${mq[0]} {
									text-align: left;
								}
							`}
						>
							Find your next green friend
						</H1>
						<Button weight='800' icon={true} onClick={goToForm}>
							start quizz
						</Button>
					</Wrap>
				</Wrap>
				<div>
					<picture>
						<source
							media='(max-width: 768px)'
							srcSet={illustration_home_mobile}
						/>
						<img
							src={illustration_home}
							css={css`
								width: 100%;
							`}
							alt='Illustration home'
						/>
					</picture>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
