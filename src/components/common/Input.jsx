import React from 'react';

const Input = ({ value, name, type, placeholder, required, onChange, onBlur }) => {

    const handleChange = e => {
        onChange(e);
    }

    const handleBlur = e => {
        onBlur && onBlur(e);
    }

    return <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        onBlur={handleBlur}
    />
}

export default Input;