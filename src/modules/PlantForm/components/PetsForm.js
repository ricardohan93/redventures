/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const PetsForm = ({ currentStep, pets, handleChange }) => {
	if (currentStep !== 3) return null;

	return (
		<div className='form-group'>
			<label htmlFor='pets'>Pets</label>
			<input
				className='form-control'
				id='pets'
				name='pets'
				type='text'
				placeholder='Enter pets'
				value={pets}
				onChange={handleChange}
			/>
		</div>
	);
};

export default PetsForm;
