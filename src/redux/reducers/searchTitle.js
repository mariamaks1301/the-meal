import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const getMealsByTitle  = createAsyncThunk(
    'searchTitle/getMealsByTitle',
    async(title, {rejectWithValue}) => {
        try {

          const res = await axios(`search.php?s=${title}`)

            return res.data.meals
            
        } catch (error) {
            return rejectWithValue(error.message)
            
        }
    },
    { 
        condition: (_, {getState}) => {
            const {loading} = getState().searchTitle

            if(loading === 'loading'){
                return false
            }
        }
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: ''
}

const searchTitleSlice = createSlice({
    name: 'searchTitle',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMealsByTitle.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getMealsByTitle.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getMealsByTitle.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })
            
    }

})

export const searchTitleReducer = searchTitleSlice.reducer;

export const selectSearchTitle = ((state)=> state.searchTitle)