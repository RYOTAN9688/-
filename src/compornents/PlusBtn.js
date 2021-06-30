import React from 'react';
import PropTypes from 'prop-types';

const PlusBtn = (onClick) => {
    return (
        <button onClick={onClick}>+</button>
    )
}

PlusBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
}
export default PlusBtn;