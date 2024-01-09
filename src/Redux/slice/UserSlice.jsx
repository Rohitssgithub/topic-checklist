import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { httpRequest } from '../../apiservices';

export const fetchAllUsers = createAsyncThunk('showUser', async () => {
    try {
        let response = await httpRequest.get("/user");
        return response.data
    }
    catch (err) {
        console.log(err)
    }

});

export const fetchSingleUser = createAsyncThunk(
    "user/single",
    async (id) => {
        console.log('thunkAPI', id)
        try {
            let data = await httpRequest.put(`/user/${id}`);
            console.log("data", data)
            return data.data
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
export const addUser = createAsyncThunk("addUser", async (formData, { rejectWithValue }) => {
    try {
        const response = await httpRequest.post('/user', formData)
        console.log('response', response)
        toast.success('User Added Successfully')
        return response.data;
    }
    catch (error) {
        console.log('error', error)
        toast.error('error while creating user')
        return rejectWithValue(error);
    }
})



export const updateUser = createAsyncThunk(
    "user/update",
    async (thunkAPI) => {
        console.log('thunkAPI', thunkAPI)
        try {
            let data = await httpRequest.put(`/user/${thunkAPI.id}`, thunkAPI.value);
            console.log("data", data)
            toast.success('User updated Successfully')
            return data.data
        } catch (err) {
            console.log(err)
            toast.error('error while updating user')
        }
    }
)


export const deleteUser = createAsyncThunk("delete/user", async (id, { rejectWithValue }) => {
    console.log(id)
    const response = await httpRequest.delete(`/user/${id}`);
    console.log(response)
    try {
        const result = await response.data;
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})


const userReducer = createSlice({
    name: 'users',
    initialState: {
        allusers: [],
        singleUsers: [],
        filterUser: [],
        loading: false,
        error: null,
    },
    reducers: {
        searchUser: (state, action) => {
            state.filterUser = state.allusers.filter((ele) => {
                return ele.name.toLowerCase().includes(action.payload)
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending, (state) => {
            state.loading == true
        })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.allusers = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addUser.pending, (state) => {
                state.loading == true
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.allusers.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading == true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.allusers = state.allusers.map((ele) =>
                    ele.id === action.payload.id ? action.payload : ele
                );
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading == true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.allusers = state.allusers.filter((ele) => ele.id !== action.payload.id);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchSingleUser.pending, (state) => {
                state.loading == true
            })
            .addCase(fetchSingleUser.fulfilled, (state, action) => {
                state.loading = false;
                state.singleUsers = action.payload
            })
            .addCase(fetchSingleUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    }

})

export default userReducer.reducer;

export const { searchUser } = userReducer.actions;