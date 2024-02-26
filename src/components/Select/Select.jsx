import React from "react";

import "./Select.css";

const Select = ({ label, value, options, onChange, id }) => {
    return (
        <div>
            <label htmlFor={id} className="filter_label">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                id={id}
                className="filter_select"
            >
                {options.map(({ value: optionValue, label: optionLabel }) => (
                    <option key={optionValue} value={optionValue}>
                        {optionLabel}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
