import React from "react";
import styles from "./Input.module.scss"

export const InputSign = ({ name, value, onChange, type, label, placeholder, required }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className={styles["input-div"]}>
            <label htmlFor={name}><div className={styles["input-label"]}>
                {label}
                {required && <p className={styles["required"]}>*</p>}
            </div>
            </label>
            <div>
                <input className={styles["input"]} type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} required={required} ></input>
            </div>
        </div>
    );
}
 
