import React from 'react';
import ExpenseItem from  './ExpenseItem';
import ExpenseCounter from './ExpenseCounter';

class DisplayContainer extends React.Component {
    render() {
      return (
	  		<div className="display-container">
                <h1>Expenses List</h1>
				<ExpenseCounter/>
				<ExpenseItem
					title = "Kinobilett"
					category= "Other"
					amount = "2"
					date ="01/09/2017"
				/>
				<ExpenseItem
					title = "Bildekk"
					category= "Transportation"
					amount = "4"
					date ="01/09/2018"
				/>

            </div>
			);
    }
  }

  export default DisplayContainer;