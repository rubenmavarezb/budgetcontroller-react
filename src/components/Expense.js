import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({exp}) => {
    return ( 
        <li className='gastos'>
            <p>
                {exp.expenseName}
                <span className='gasto'>${exp.expenseValue}</span>
            </p>
        </li>
     );
}
 
Expense.propTypes = {
    exp: PropTypes.object.isRequired
}

export default Expense;