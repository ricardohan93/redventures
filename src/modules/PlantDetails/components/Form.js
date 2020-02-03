/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Button from "components/Button";
import Input from "components/Input";
import ErrorLabel from "components/ErrorLabel";

import { brown, cucumber } from "styles/colors";
import { space } from "styles/space";

const Form = ({ form, handleSubmit, handleChange, errors, warning }) => (
	<form
		css={css`
			display: flex;
			flex-flow: column wrap;
		`}
	>
		<div
			css={css`
				display: flex;
				flex-flow: column wrap;
				margin-bottom: ${space[4]}px;
			`}
		>
			<label
				htmlFor='name'
				css={css`
					color: ${brown};
					font-weight: 800;
					font-size: 1.7rem;
					margin-bottom: ${space[2]}px;
				`}
			>
				Name
			</label>
			<Input
				name='name'
				value={form.name}
				onChange={handleChange}
				placeholder='Crazy Plant Person'
			/>
			{warning && errors.name && (
				<ErrorLabel>{errors.name}</ErrorLabel>
				// <div
				// 	css={css`
				// 		display: flex;
				// 		align-items: center;
				// 	`}
				// >
				// 	<Icon name='Warning' size='15px' fill={warning} css={iconSpacing} />
				// 	<P size='1.4' color={red400}>
				// 		{errors.name}
				// 	</P>
				// </div>
			)}
		</div>
		<div
			css={css`
				display: flex;
				flex-flow: column wrap;
				margin-bottom: ${space[4]}px;
			`}
		>
			<label
				htmlFor='email'
				css={css`
					color: ${brown};
					font-weight: 800;
					font-size: 1.7rem;
					margin-bottom: ${space[2]}px;
				`}
			>
				E-mail
			</label>
			<Input
				name='email'
				value={form.email}
				onChange={handleChange}
				placeholder='plantperson@email.com'
			/>
			{warning && errors.email && (
				<ErrorLabel>{errors.email}</ErrorLabel>
				// <div
				// 	css={css`
				// 		display: flex;
				// 		align-items: center;
				// 	`}
				// >
				// 	<Icon name='Warning' size='15px' fill={warning} css={iconSpacing} />
				// 	<P size='1.4' color={red400}>
				// 		{errors.email}
				// 	</P>
				// </div>
			)}
		</div>
		<Button
			bg='transparent'
			color={cucumber}
			border={`1px solid ${cucumber}`}
			fill={cucumber}
			onClick={handleSubmit}
			css={css`
				margin-top: ${space[6]}px;
				align-self: flex-end;
			`}
		>
			send
		</Button>
	</form>
);

export default Form;
