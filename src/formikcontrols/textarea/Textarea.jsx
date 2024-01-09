import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from "./Textarea.module.scss"
import ErrorText from '../errortext/ErrorText'
// import { combineClasses } from 'utils/utils'

const Textarea = (props) => {
    const { label, name, icon, placeholder, className, isRequired, ...rest } = props
    return (
        <div className={combineClasses(styles.inputControl, className || "")}>
            <label className={styles.label} htmlFor={name}>{label} {
                isRequired ? 
                <span className={styles.requiredMark}>*</span>
                : ""}
            </label>
            <Field name={name} {...rest}>
                {
                    ({field})=>{
                        return(
                            <textarea 
                                {...field}
                                id={name}
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

export default Textarea