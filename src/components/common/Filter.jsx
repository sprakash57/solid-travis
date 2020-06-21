import React from 'react';

const options = ['ALL', 'PENDING', 'COMPLETED'];

const Filter = ({ onChange, value }) => {

    const handleChange = e => {
        onChange(e);
    }

    return (
        <select name="filter" id="filter" className="custom-select" value={value} onChange={handleChange}>
            {options.map((item, i) => <option key={i} value={item}>{item}</option>)}
        </select>
    )
}

export default Filter;