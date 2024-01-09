import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from "./Input.module.scss"
import ErrorText from '../errortext/ErrorText'

const Input = (props) => {
    const { label, name, icon, placeholder, isRequired, type, ...rest } = props
    
    return (
        <div className={styles.inputControl}>
            <label className={styles.label} htmlFor={name}>{label} {
                isRequired ? 
                <span className={styles.requiredMark}>*</span>
                : ""}
            </label>
            <Field name={name}>
                {
                    ({field})=>{
                        return(
                            <input 
                                {...field}
                                {...rest}
                                id={name}
                                type={type || "text"} 
                                className={styles.inputField}
                                placeholder={placeholder}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage 
                name={name}
                component={ErrorText}
            />
        </div>
    )
}

export default Input