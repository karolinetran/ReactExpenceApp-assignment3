import React from 'react';

class ExpenseItem extends React.Component {
    render() {

		const title = this.props.title;
		const category = this.props.category;
		const amount = this.props.amount;
		const date = this.props.date;

      return (
	  		<div className="display-item">
				<div className="display-item-header">
					<h4>{title}</h4>
					<button>
						Remove
					</button>
				</div>
				<div className="display-item-details">
					<p>#️⃣ {amount}</p>
					<p>📊 {category}</p>
					<p>📅 {date}</p>
				</div>
            </div>
			);
    }
  }

  export default ExpenseItem;