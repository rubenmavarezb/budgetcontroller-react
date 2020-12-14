import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types'

const ExpensesList = ({ expenses }) => {
    return ( 
        <div className='gastos-realizados'>
            <h2>Expense's list:</h2>
            {expenses.map(exp => (
                <Expense
                    key={exp.id}
                    exp={exp}
                />
            ))}
        </div>
     );
}
 
ExpensesList.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default ExpensesList;