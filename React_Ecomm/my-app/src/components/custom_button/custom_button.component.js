import React from 'react';
import './custom_button.style.css';

const CustomButton = ({ children, isGoolgeSignin , ...otherProps }) => {
    return (
        <button className={`${isGoolgeSignin? 'googleSignin':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
