import React from 'react';

class InputForm extends React.Component {
    render() {
      return <div className="input-form-container">
                <h1>Input Form</h1>
                <p>Keep track of your expenses!</p>
                <form className="input-form">
                    <input>
                    </input>
                    <input>
                    </input>
                    <button>
                        Submit Expence
                    </button>
                </form>
            </div>;
    }
  }

  export default InputForm;