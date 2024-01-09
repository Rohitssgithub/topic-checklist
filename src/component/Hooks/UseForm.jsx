import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const UseFrom = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            category: '',
            checkbox: [],
            radio: '',
        },
    });

    console.log('register', register)

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(errors)

    return (
        <>
            <div>UseFrom</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                /> */}
                <input
                    {...register('firstName', { required: 'First name is required' })}
                    placeholder="First name"
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}

                <input
                    {...register('lastName', {
                        required: 'Last name is required',
                        minLength: {
                            value: 2,
                            message: 'Last name must be at least 2 characters long',
                        },
                    })}
                    placeholder="Last name"
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <select {...register('category', { required: 'First name is required' })} defaultValue="">
                    <option value="">Select...</option>
                    <option value="A">Category A</option>
                    <option value="B">Category B</option>
                </select>
                {errors.category && <p>{errors.category.message}</p>}

                {/* Checkbox inputs */}
                <label>
                    <input {...register('checkbox', { required: 'First name is required' })} type="checkbox" value="A" />
                    Checkbox A
                </label>

                <label>
                    <input {...register('checkbox', { required: 'First name is required' })} type="checkbox" value="B" />
                    Checkbox B
                </label>

                <label>
                    <input {...register('checkbox', { required: 'First name is required' })} type="checkbox" value="C" />
                    Checkbox C
                </label>
                {errors.checkbox && <p>{errors.checkbox.message}</p>}

                {/* Radio inputs */}
                <label>
                    <input {...register('radio', { required: 'First name is required' })} type="radio" value="A" />
                    Radio A
                </label>

                <label>
                    <input {...register('radio', { required: 'First name is required' })} type="radio" value="B" />
                    Radio B
                </label>

                <label>
                    <input {...register('radio', { required: 'First name is required' })} type="radio" value="C" />
                    Radio C
                </label>
                {errors.radio && <p>{errors.radio.message}</p>}

                <input type="submit" />
            </form>
        </>
    );
};

export default UseFrom;
