import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({ addNewExpense, saveCreateExpense }) => {

    const [expenseName, saveExpenseName] = useState('');
    const [expenseValue, saveExpenseValue] = useState(0);
    const [error, setError] = useState(false);

    const addExpense = (e) => {
        e.preventDefault();

        //validate
        if(expenseValue < 1 || isNaN(expenseValue) || expenseName.trim() === ''){
            setError(true);
            return;
        }

        setError(false)

        //Creating expense

        const expense = {
            expenseName,
            expenseValue,
            id: shortid.generate()
        }

        //Sending expense to main component
        addNewExpense(expense);
        saveCreateExpense(true);

        //reset form
        saveExpenseName('');
        saveExpenseValue(0);
    }

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here:</h2>

            {error ? <Error
                text='You must complete both fields'
            /> : 
            null}

            <div className="campo">
                <label>Expense's name</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='e.g: cellphone rent...'
                    value={expenseName}
                    onChange={e => saveExpenseName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Expense's value</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='e.g: 2000...'
                    value={expenseValue}
                    onChange={e => saveExpenseValue( parseInt(e.target.value, 10) )}
                />
            </div>

            <input 
                type="submit"
                className='button-primary u-full-width'
                value='Add expense'
            />
        </form>
     );
}
 
Form.propTypes = {
    addNewExpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired
}

export default Form;