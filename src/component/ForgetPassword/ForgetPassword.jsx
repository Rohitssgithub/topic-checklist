import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import styles from '../Login/Login.module.scss'
import {  useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    let navigate = useNavigate()
    const signupSchema = Yup.object().shape({
        email: Yup.string().email('Enter valid email').required("This field is required"),
    })
    return (
        <>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={signupSchema}
                onSubmit={values => {
                    console.log('values', values)
                    navigate('/otp-recive')

                }}
            >
                {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                    <Form Form onSubmit={handleSubmit}>
                        <div className={styles.emailSenderDiv}>
                            <h4>Email</h4>
                            <p>Your code was sent to you on this email</p>
                            <div className={styles.inputGroup}>
                                <label >Email address</label>
                                <input type='email' value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} placeholder='email'
                                    id="floatingInput" className={`form-control  inp  ${errors.email && touched.email && 'is-invalid'}`} />
                                {
                                    errors.email && touched.email ?
                                        <p className={styles.errorMessage}>{errors.email}</p> : null
                                }
                            </div>
                        </div>
                        <button className='btn btn-danger px-4 w-100' type='submit'>Send OTP</button>

                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ForgetPassword