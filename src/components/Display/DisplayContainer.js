import React from 'react';
import ExpenseItem from  './ExpenseItem';
import ExpenseCounter from './ExpenseCounter';

class DisplayContainer extends React.Component {
		
    render() {
		console.log("render")
	  const {expenses, onRemoveExpense} = this.props;

      return (
	  		<div className="display-container">
                <h1>Expenses List</h1>
				<ExpenseCounter
					count= {expenses.length}
				/>
				<div className="display-container-items">
					{expenses.map((expence, index) => (
						<ExpenseItem
							title = {expence.title}
							category = {expence.category}
							amount = {expence.amount}
							date = {expence.date}
							onRemove={() => onRemoveExpense(index)}
						/>

					))}
				</div>
            </div>
			);
    }
  }

  export default DisplayContainer;