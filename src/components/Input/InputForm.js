import React from 'react';
import {useEffect} from 'react';
import InputElement from "./InputElement.js";
import InputDropdown from './InputDropdown.js';


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          amount:"",
          date:"",
          category:"-",
          counter:0,
          error:false
        };
    }
    

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, amount, date, category } = this.state;
    
        if (title === "" || amount === "" || date === "") {
            console.log("Error");
            this.setState({error : true});    
        } else {
            const expense = {
                title: title,
                amount: amount,
                date: date,
                category: category
            };
            localStorage.setItem(`expense_${this.state.counter}`, JSON.stringify(expense));
            this.state.counter = this.state.counter + 1;
        }
    }
    

    render() {
      return <div className="input-form-container">
                <h1>Input Expence</h1>
                <form className="input-form">
                    <InputElement
                        type='text' 
                        name='title' 
                        handleInputChange={this.handleInputChange}
                    />
                    <InputElement
                        type='number' 
                        name='amount' 
                        handleInputChange={this.handleInputChange}
                    />
                    <InputElement
                        type='date' 
                        name='date' 
                        handleInputChange={this.handleInputChange}
                    />
                    <InputDropdown
                        name="category"
                        handleInputChange={this.handleInputChange}
                    />
                    <button 
                        className='input-btn'
                        onClick={this.handleSubmit}
                    >
                        Submit Expence
                    </button>
                </form>

            </div>;
    }
  }

  export default InputForm;