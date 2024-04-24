import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import InputForm from "./components/Input/InputForm.js";
import DisplayContainer from "./components/Display/DisplayContainer.js";
import { useEffect, useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {

    const sortAndRenameExpenses = () => {
      const keys = Object.keys(localStorage).filter(key => key.startsWith("expense_"));
      keys.sort((a, b) => {
        const numA = parseInt(a.split('_')[1]);
        const numB = parseInt(b.split('_')[1]);
        return numA - numB;
      });

      keys.forEach((key, index) => {
        const newName = `expense_${index}`;
        if (key !== newName) {
          const value = localStorage.getItem(key);
          localStorage.removeItem(key);
          localStorage.setItem(newName, value);
        }
      });
    };


    const updateExpenseFromLocalStorage = () => {
      const keys = Object.keys(localStorage).filter(key => key.startsWith("expense_"));
      const expenseData = keys.map(key => JSON.parse(localStorage.getItem(key)));
      setExpenses(expenseData);
    };

    sortAndRenameExpenses();
    updateExpenseFromLocalStorage();

    const handleStorageChange = () => {
      updateExpenseFromLocalStorage();
    };
    window.addEventListener("storage", handleStorageChange);

  }, []);

  const onExpenseUpdate = () => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith("expense_"));
    const expenseData = keys.map(key => JSON.parse(localStorage.getItem(key)));
    setExpenses(expenseData);
  };

  const removeExpenseItem = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
  
    updatedExpenses.forEach((_, i) => {
      const key = `expense_${i}`;
      const item = localStorage.getItem(`expense_${i + 1}`);
      if (item) {
        localStorage.setItem(key, item);
      } else {
        localStorage.removeItem(key);
      }
    });
  
    setExpenses(updatedExpenses);
    localStorage.removeItem(`expense_${expenses.length - 1}`);
  };

  return (
    <div className="App">
      <Header />
      <div className='input-display-container'>
        <InputForm 
          expenses={expenses}
          onExpenseUpdate={onExpenseUpdate}
        />
        <DisplayContainer 
          expenses={expenses} 
          onRemoveExpense={removeExpenseItem}
        />
      </div>
    </div>
  );
}

export default App;