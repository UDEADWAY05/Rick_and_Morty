import React from "react";
import "./input.scss"

export const InputSign = ({ name, value, onChange, type, label, placeholder, required }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className="input-div">
            <label htmlFor={name}><div className="input-label">
                {label}
                {required && <p className="required">*</p>}
            </div>
            </label>
            <div>
                <input className="input" type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} required={required} ></input>
            </div>
        </div>
    );
}
 
