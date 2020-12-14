import React, { useState, useEffect } from 'react';
import NewBudget from './components/NewBudget';
import Form from './components/Form'
import ExpensesList from './components/ExpensesList';
import BudgetController from './components/BudgetController'

function App() {

  const [budget, setBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showBudget, updateShowBudget] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [exp, addNewExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false)


  useEffect(() => {
    if(createExpense){
      saveExpenses([
        ...expenses,
        exp
      ]);

      const remainingBudget = remaining - exp.expenseValue;
      saveRemaining(remainingBudget)
      saveCreateExpense(false);
    }
  }, [exp, expenses, createExpense, remaining])


  return (
    <div className='container'>
      <header>
        <h1>Monthly expenses</h1>
        <div className='contenido-principal contenido'>
          { showBudget ? (
            <NewBudget 
            setBudget={setBudget}
            saveRemaining={saveRemaining}
            updateShowBudget={updateShowBudget}
          />
          ) : (
            <div className="row">
            <div className="one-half column">
              <Form
                addNewExpense={addNewExpense}
                saveCreateExpense={saveCreateExpense}
              />
            </div>
            <div className="one-half column">
              <ExpensesList
                expenses={expenses}
              />
              <BudgetController
                budget={budget}
                remaining={remaining}
              />
            </div>
          </div>
          ) }
        </div>
      </header>
    </div>
  );
}

export default App;
