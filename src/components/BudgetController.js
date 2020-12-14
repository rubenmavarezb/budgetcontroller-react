import React, { Fragment } from 'react';
import { checkBudget } from './Helper';
import PropTypes from 'prop-types';

const BudgetController = ({budget, remaining}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget:${budget}
            </div>
            <div className={checkBudget(budget, remaining)}>
                Remaining:${remaining}
            </div>
        </Fragment>
     );
}

BudgetController.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
}
 
export default BudgetController;