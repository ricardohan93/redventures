/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const WaterForm = ({ currentStep, water, handleChange }) => {
	if (currentStep !== 2) return null;

	return (
		<div className='form-group'>
			<label htmlFor='water'>Water</label>
			<input
				className='form-control'
				id='water'
				name='water'
				type='text'
				placeholder='Enter water'
				value={water}
				onChange={handleChange}
			/>
		</div>
	);
};

export default WaterForm;
