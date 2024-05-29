import React from 'react';

class InputElement extends React.Component {
    render() {
		
		// Destructure props for easy access
		const type = this.props.type;
		const name = this.props.name;
		const handleInputChange = this.props.handleInputChange;
		const value = this.props.value;

		return (
			<div className="input-form-element">
				<label>
					{name}
					<input 
						type={type} 
						name={name}
						value={value} 
						onChange={handleInputChange}
						required
					/>
				</label>
			</div>
		);
    }
  }

  export default InputElement;