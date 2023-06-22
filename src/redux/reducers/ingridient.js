import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMealsByIngridient = createAsyncThunk(
    'ingridient/getMealsByIngridient',
    async(ingridient, {rejectWithValue}) => {
        try {
            const res = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=salmon`)
         
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

const ingridientSlice = createSlice({
    name: 'ingridient',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMealsByIngridient.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getMealsByIngridient.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getMealsByIngridient.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })         
    }

})

export const ingridientReducer = ingridientSlice.reducer;