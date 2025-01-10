import React from 'react';
import './button.css';
import WhiteArrow from '../../assets/white-arrow-icon.svg';

const Button = ({ arrow, buttonStyle, loading, children, ...props }) => {
return (
    <button className={`button ${buttonStyle}`} {...props}>
        {children}{arrow && <img src={WhiteArrow} alt="Arrow" />}
    </button>
);
};

export default Button;
