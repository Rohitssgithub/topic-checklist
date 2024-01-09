import React, { useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from "./Password.module.scss"
import ErrorText from '../errortext/ErrorText'
// import { ReactComponent as Eye } from "assets/svg/eye.svg"
// import { ReactComponent as EyeSlash } from "assets/svg/eye-slash.svg"
// import TextError from '../shared/TextError'
// import { TextField } from '@mui/material'

const Password = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const { label, name, icon, placeholder, isRequired, ...rest } = props

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev)
    }
    return (
        <div className={styles.inputControl}>
            <label className={styles.label} htmlFor={name}>{label} {
                isRequired ? 
                <span className={styles.requiredMark}>*</span>
                : ""}
            </label>
            <Field name={name} {...rest}>
                {
                    ({field})=>{
                        return(
                            <>
                            <input 
                                {...field}
                                id={name} 
                                className={styles.inputField}
                                placeholder={placeholder}
                                type={showPassword ? "text" :"password"}
                            />
                            {/* {
                            showPassword ?
                            <EyeSlash onClick={toggleShowPassword} className={styles.eyeIcon}/>
                            :
                            <Eye onClick={toggleShowPassword} className={styles.eyeIcon}/>
                            } */}
                            </>
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

export default Password