import React from 'react'

const Button = ({ content , onButtonClick, type, id }) => {
    return (
        <div className="Button" 
        onClick={onButtonClick(content)}
        type={type}
        id={id}
        >{content}</div>
    )}

export default Button;

