import React from 'react';
import InputElement from "./InputElement.js";
import InputDropdown from './InputDropdown.js';


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
          title: "",
          amount:"",
          date:"",
          category:"-",
          error:false
        };
    }

    // Handle input changes and update state
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // Handle form submission
    handleSubmit = (event) => {
        event.preventDefault();
        const { title, amount, date, category } = this.state;
    
        // checks if any of the inputs fields are empty, if so sets error state to true
        if (title === "" || amount === "" || date === "") { 
            console.log("Error");
            this.setState({error : true});    
        } else {
            // If all fields are filled, create an expense object
            const expense = {
                title: title,
                amount: amount,
                date: date,
                category: category
            };

            // Save the expense object to local storage
            localStorage.setItem(`expense_${this.props.expenses.length}`, JSON.stringify(expense));
            this.props.onExpenseUpdate();

            // Reset the form fields and error state
            this.setState({
                title: "",
                amount: "",
                date: "",
                category: "-",
                error: false
            });

        }
    }
    

    render() {

      const { error } = this.state;
      const {title, amount, date,category} = this.state;

      return <div className="input-form-container">
                <h1>Input Expence</h1>
                <form className="input-form">
                    <InputElement
                        type='text' 
                        name='title' 
                        value={title}
                        handleInputChange={this.handleInputChange}
                    />
                    <InputElement
                        type='number' 
                        name='amount' 
                        value={amount}
                        handleInputChange={this.handleInputChange}
                    />
                    <InputElement
                        type='date' 
                        name='date' 
                        value={date} 
                        handleInputChange={this.handleInputChange}
                    />
                    <InputDropdown
                        name="category"
                        value={category}
                        handleInputChange={this.handleInputChange}
                    />
                    <button 
                        className='input-btn'
                        onClick={this.handleSubmit}
                    >
                        Submit Expence
                    </button>
                </form>            
                {error && 
                    <p>
                        Please fill in all fields
                    </p>
                }

            </div>;
    }
  }

  export default InputForm;