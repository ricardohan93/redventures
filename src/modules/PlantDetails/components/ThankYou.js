/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import { H1, P } from "components/Text";

import envelop from "assets/envelop.png";

import { space } from "styles/space";

const ThankYou = () => (
	<Fragment>
		<H1
			size='4'
			weight='800'
			css={css`
				font-size: 3rem;
			`}
		>
			Thank you!
		</H1>
		<P
			size='1.8'
			css={css`
				line-height: 2.4rem;
				margin-bottom: ${space[5]}px;
			`}
		>
			You will hear from us soon. Please check your e-mail!
		</P>
		<img
			css={css`
				display: block;
				margin: 0 auto;
				width: 180px;
			`}
			src={envelop}
			alt='envelop'
		/>
	</Fragment>
);

export default ThankYou;
