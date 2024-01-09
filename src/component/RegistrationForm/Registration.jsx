import React, { useState, useEffect } from 'react';
import styles from '../Login/Login.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
const RegisterForm = () => {
    let [pass, setPass] = useState(false)

    const signupSchema = Yup.object().shape({
        username: Yup.string().required("This field is required"),
        password: Yup.string().min(8, 'Minimun character should be 8').required("This field is required"),
        email: Yup.string().email('Enter valid email').required("This field is required"),
    })
    return (
        <>
            <Formik
                initialValues={{ email: "", username: '', password: '', confirmPassword: '' }}
                validationSchema={signupSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('values', values)
                    resetForm();
                }}
            >
                {({ errors, touched, handleChange, handleSubmit, handleBlur, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <h4>Register Here</h4>
                        <div className={styles.inputGroup}>
                            <label >Email address</label>
                            <input type='email' value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} placeholder='email'
                                id="floatingInput" className={`form-control  inp  ${errors.email && touched.email && 'is-invalid'}`} />
                            {
                                errors.email && touched.email ?
                                    <p className={styles.errorMessage}>{errors.email}</p> : null
                            }
                        </div>
                        <div className={styles.inputGroup}>
                            <label >username</label>
                            <input type='text' value={values.username} name="username" onChange={handleChange} onBlur={handleBlur} placeholder='username'
                                id="floatingInput" className={`form-control  inp  ${errors.username && touched.username && 'is-invalid'}`} />
                            {
                                errors.username && touched.username ?
                                    <p className={styles.errorMessage}>{errors.username}</p> : null
                            }
                        </div>
                        <div className={`${styles.inputGroup} ${styles.passInput} `}>
                            <label>Password</label>
                            <input type={pass ? 'text' : 'password'} value={values.password} name="password" placeholder='password' onChange={handleChange}
                                onBlur={handleBlur} className={`form-control inp ${errors.password && touched.password}`} />

                            <span className={styles.eyeSpan} onClick={() => setPass(!pass)}>
                                {
                                    pass ? <i class="bi bi-eye-fill"></i> :
                                        <i class="bi bi-eye-slash-fill"></i>
                                }
                            </span>
                            {
                                errors.password && touched.password ?
                                    <p className={styles.errorMessage}>{errors.password}</p> : null
                            }
                        </div>

                        <div className={styles.needDiv}>
                            <Link to='/login'>
                                <span>Already Register ?</span>
                            </Link>

                        </div>
                        <button className='btn btn-danger px-4 w-100' type='submit'>Login</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default RegisterForm