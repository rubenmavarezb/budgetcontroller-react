import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const NewBudget = ({ setBudget, saveRemaining, updateShowBudget }) => {

    const [newBudget, saveBudget] = useState(0);
    const [error, setError] = useState(false);

    const setNewBudget = (e) => {
        saveBudget( parseInt(e.target.value, 10) )
    }

    const addBudget = e => {
        e.preventDefault();

        //Validate
        if(newBudget < 1 || isNaN( newBudget )){
            setError(true)
            return;
        }

        //if validation is correct
        setError(false)
        setBudget(newBudget);
        saveRemaining(newBudget)
        updateShowBudget(false)
    }

    return ( 
        <Fragment>
            <h2>How much is your budget?</h2>

            {error ? <Error text='Add a correct budget'/> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Your budget...'
                    onChange={setNewBudget}
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Set my budget'
                />
            </form>
        </Fragment>
     );
}
 
NewBudget.propTypes = {
    setBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateShowBudget: PropTypes.func.isRequired,
}

export default NewBudget;

