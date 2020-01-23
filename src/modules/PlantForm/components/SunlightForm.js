/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SunlightForm = ({ currentStep, sun, handleChange }) => {
	if (currentStep !== 1) return null;

	return (
		<div className='form-group'>
			<label htmlFor='sun'>Sun</label>
			<input
				className='form-control'
				id='sun'
				name='sun'
				type='text'
				placeholder='Enter sun'
				value={sun}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SunlightForm;
