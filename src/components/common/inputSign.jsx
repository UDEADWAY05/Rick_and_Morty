import React from "react";

const InputSign = ({ name, value, onChange, type, label, placeholder, required }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className="input-div">
            <label className="text" htmlFor={name}><div className="labelText">
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
 
export default InputSign;