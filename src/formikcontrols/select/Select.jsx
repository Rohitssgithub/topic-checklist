import React from 'react'
import ReactSelect from 'react-select';
import styles from "./Select.module.scss"
import { ErrorMessage, Field } from 'formik';
import ErrorText from '../errortext/ErrorText'

const Select = (props) => {
    const { label, name, placeholder, isRequired, options, formik, optionsHeight, ...rest } = props

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: 'none',
            //   borderColor: '#9e9e9e',
            border: "none",
            minHeight: '28px',
            height: '28px',
            boxShadow: state.isFocused ? null : null,
        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '28px',
            padding: '0 8px'
        }),

        menuList: (provided) => ({
            ...provided,
            maxHeight: optionsHeight || "100px",
        }),

        option: (provided) => ({
            ...provided,
            cursor: "pointer"
        }),

        input: (provided, state) => ({
            ...provided,
            margin: '0px',
            padding: "0",
            fontWeight: "600 !important"
        }),
        indicatorSeparator: state => ({
            display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '28px',
        }),
    };
    return (
        <div className={styles.inputControl}>
            <label className={styles.label} htmlFor={name}>{label} {
                isRequired ?
                    <span className={styles.requiredMark}>*</span>
                    : ""}
            </label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return (
                            <ReactSelect
                                {...field}
                                id={name}
                                className={styles.inputField}
                                options={options}
                                styles={customStyles}
                                onChange={(value) => {
                                    formik.setFieldValue(name, value)
                                }}
                                placeholder={placeholder}
                                classNamePrefix="react-select"
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

export default Select;