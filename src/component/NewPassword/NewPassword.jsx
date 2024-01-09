import React, { useState, useRef, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Login/Login.module.scss'


const NewPassword = () => {
    let navigate = useNavigate()
    const signupSchema = Yup.object().shape({
        password: Yup.string().min(8, 'Minimun character should be 8').required("This field is required"),
        confirmPassword: Yup.string().required("This field is required").oneOf([Yup.ref("password"), null], "Password must match"),

    })
    return (
        <>
            <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validationSchema={signupSchema}
                onSubmit={values => {
                    console.log('values', values)
                    navigate('/')
                }}
            >
                {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                    <Form Form onSubmit={handleSubmit}>
                        <div className={styles.emailSenderDiv}>
                            <h4>Set New Password</h4>
                            <div className={styles.inputGroup}>
                                <label >New Password</label>
                                <input type='password' value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} placeholder='Password'
                                    id="floatingInput" className={`form-control  inp  ${errors.password && touched.password && 'is-invalid'}`} />
                                {
                                    errors.password && touched.password ?
                                        <p className={styles.errorMessage}>{errors.password}</p> : null
                                }
                            </div>
                            <div className={styles.inputGroup}>
                                <label className='mb-1'>Confirm Password</label>
                                <input type='password' value={values.confirmPassword} name="confirmPassword" onChange={handleChange} onBlur={handleBlur} placeholder='Confirm Password'
                                    id="floatingInput" className={`form-control  inp  ${errors.confirmPassword && touched.confirmPassword && 'is-invalid'}`} />
                                {
                                    errors.confirmPassword && touched.confirmPassword ?
                                        <p className={styles.errorMessage}>{errors.confirmPassword}</p> : null
                                }
                            </div>
                        </div>
                        <button className='btn btn-danger px-4 w-100' type='submit'>Set Password</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default NewPassword