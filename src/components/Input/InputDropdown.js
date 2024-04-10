import React from 'react';

class InputDropdown extends React.Component {
    render() {

		const name = this.props.name;
		const handleInputChange = this.props.handleInputChange;

		return (
			<div className="input-form-element">
				<label for="category">{name}
					<select 
						name={name}
						id={name}
						onChange={handleInputChange}
					>
						<option value ="-">-</option>
						<option value="housing">Housing</option>
						<option value="grocery">Grocery</option>
						<option value="transportation">Transportation</option>
						<option value="clothes">Clothes</option>
						<option value="other">Other</option>
					</select>
				</label>
			</div>
				);
    }
  }

  export default InputDropdown;