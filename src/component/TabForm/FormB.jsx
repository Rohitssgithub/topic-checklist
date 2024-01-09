import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import Submit from './Submit';
import FormikControl from '../../formikcontrols/FormikControl';

const FormB = () => {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is Required'),
        imageFile: Yup.string()
            .test('is-pdf', 'Only PDF documents are allowed', (value) => {
                if (!value) {
                    return true;
                }
                return value.endsWith('.pdf');
            })
            .required('This field is required'),
    })

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        imageFile: null,

    }
    return (
        <>
            <div >
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        console.log('values', values)
                    }}
                    validateOnBlur
                    validateOnChange
                >
                    {formik => {
                        return (
                            <Form className='row'>
                                <div className='col-4'>
                                    <FormikControl
                                        control='input'
                                        type='text'
                                        label='Enter Your Username'
                                        placeholder='Enter Your Username'
                                        name='name'
                                    />
                                </div>
                                <div className='col-4'>
                                    <FormikControl
                                        control='input'
                                        type='email'
                                        label='Enter Your email'
                                        placeholder='Enter Your email'
                                        name='email'
                                    />
                                </div>
                                <div className='col-4'>
                                    <FormikControl
                                        control='input'
                                        type='number'
                                        label='Enter Your Phone'
                                        placeholder='Enter Your Phone'
                                        name='phone'
                                    />
                                </div>

                                <div className='col-4'>
                                    <FormikControl
                                        control='input'
                                        type='file'
                                        label='file'
                                        placeholder='Upload file'
                                        name='imageFile'
                                    />
                                </div>
                                <div className='col-12 text-center'>
                                    <button className='btn btn-primary'>Submit</button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export default FormB