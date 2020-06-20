import React from 'react';

const Input = ({ value, name, type, placeholder, required, onChange }) => {

    const handleChange = e => {
        onChange(e);
    }

    return <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-control"
        placeholder={placeholder}
        required={required}
    />
}

export default Input;