import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ text }) => ( 
    <p className='alert alert-danger error'>{text}</p>
)
 
Error.propTypes = {
    text: PropTypes.string.isRequired
}

export default Error;