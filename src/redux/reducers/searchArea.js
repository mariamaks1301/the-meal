import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const getMealsByArea = createAsyncThunk(
    'searchArea/getMealsByArea',
    async(area, {rejectWithValue})=>{
        try {
            const res =  await axios(`filter.php?a=${area}`)
            
            return res.data.meals
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    } 
)

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

const searchAreaSlice = createSlice({
    name: 'searchArea',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMealsByArea.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getMealsByArea.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getMealsByArea.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })
            
    }
})

export const searchAreaReducer = searchAreaSlice.reducer;