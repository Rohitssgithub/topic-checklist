import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const userLogin = createAsyncThunk("userLogin", async (data, { rejectWithValue }) => {
    localStorage.setItem('email', JSON.stringify(data.email))
    try {
        const response = await axios.post("https://freedomthroughschool-qa.nimapinfotech.com/api/auth/send-otp", {
            // username: data.username,
            // password: data.password
            emailId: data.email
        });
        const userData = response.data;
        // localStorage.setItem('userData', JSON.stringify(userData))
        toast.success('OTP send successfully')
        return userData;
    }
    catch (err) {
        console.log('error')
        toast.error('User Not Found')
    }
});


export const verifyLoginOtp = createAsyncThunk("verify/otp", async (data, { rejectWithValue }) => {
    console.log('data', data)
    try {
        console.log('data', data)
        const response = await axios.post("https://freedomthroughschool-qa.nimapinfotech.com/api/auth/verify-otp", {
            emailId: data.emailId,
            otp: data.otp
        });
        console.log('response', response)
        const userData = response.data;
        return userData;
    }
    catch (err) {
        toast.error('OTP is invalid')
    }

});


const loginReducer = createSlice({
    name: 'login',
    initialState: {
        loginUser: [],
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) => {
            state.loading = true
        })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.loginUser = action.payload;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default loginReducer.reducer