import React from 'react';

class ExpenseCounter extends React.Component {
    render() {

    // Destructure props for easy access
	  const count = this.props.count;

      return (
	  		<div className="">
				  <p>Listed expenses: {count}</p>
        </div>
			);
    }
  }

  export default ExpenseCounter;