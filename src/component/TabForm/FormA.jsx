import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
// import styles from "../sideBarNavigation/SidebarNavigation.module.scss"
import Submit from './Submit';
import FormikControl from '../../formikcontrols/FormikControl';

const FormA = ({ handleTabClick }) => {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is Required'),
        gender: Yup.string().required('this field is required'),
        langauage: Yup.array()
            .required('This field is required'),
        city: Yup.array()
            .min(1, 'Select at least one language') // Require at least one selection
            .of(
                Yup.object().shape({
                    label: Yup.string(),
                    value: Yup.string(),
                })
            )
            .required('This field is required'),
        date: Yup.date().required('this is required'),
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
        gender: '',
        langauage: '',
        city: '',
        imageFile: null,
        password: '',
        date: null
    }
    const radioOptions = [
        { key: 'male', value: 'male' },
        { key: 'female', value: 'female' }
    ]

    const checkboxOptions = [
        { key: 'English', value: 'english' },
        { key: 'Hindi', value: 'hindi' }
    ]
    const selectOptions = [
        { label: 'Mumbai', value: 'mumbai' },
        { label: 'Pune', value: 'pune' },
    ]

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
                                {/* <div className='d-flex'> */}
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
                                <div className='col-4'>
                                    <FormikControl
                                        control='radio'
                                        label=' gender'
                                        name='gender'
                                        options={radioOptions}
                                    />
                                </div>

                                <div className='col-4'>
                                    <FormikControl
                                        control='checkbox'
                                        label='checkbox'
                                        name='langauage'
                                        options={checkboxOptions}
                                    />
                                </div>
                                <div className='col-4'>
                                    <FormikControl
                                        control='select'
                                        label='checkbox'
                                        name='city'
                                        options={selectOptions}
                                    />
                                </div>
                                <div className='col-4'>
                                    <FormikControl
                                        control='input'
                                        type='text'
                                        label='Password'
                                        placeholder='Password'
                                        name='password'
                                    />
                                </div>

                                <FormikControl
                                    control='date'
                                    label='Date'
                                    name='date'
                                />
                                <div className='col-12 text-center'>
                                    <button type='submit' className='btn btn-primary'>Save</button>
                                    <button
                                        // type='button'
                                        className='btn btn-primary'
                                        onClick={handleTabClick}
                                        // disabled
                                        disabled={!formik.isValid}
                                    >
                                        Next
                                    </button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export default FormA