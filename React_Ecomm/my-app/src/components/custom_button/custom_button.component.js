import React from 'react';
import './custom_button.style.css';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
