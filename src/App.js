import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import InputForm from "./components/Input/InputForm.js";
import DisplayContainer from "./components/Display/DisplayContainer.js";


function App() {
  return (
    <div className="App">
        <Header/> 
        <div className='input-display-container'>
          <InputForm/>
          <DisplayContainer/>
        </div>    
    </div>
  );
}

export default App;
