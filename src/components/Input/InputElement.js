import React from 'react';

class InputElement extends React.Component {
    render() {
		
		const type = this.props.type;
		const name = this.props.name;
		const handleInputChange = this.props.handleInputChange;

		return (
			<div className="input-form-element">
				<label>
					{name}
					<input 
						type={type} 
						name={name}
						onChange={handleInputChange}
						required
					/>
				</label>
			</div>
				);
    }
  }

  export default InputElement;