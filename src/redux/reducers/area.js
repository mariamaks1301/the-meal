import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const getAllAreas = createAsyncThunk(
    'area/getAllArea',
    async(_, {rejectWithValue})=>{
        try {
            const res =  await axios(`list.php?a=list`)

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

const areaSlice = createSlice({
    name: 'area',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllAreas.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getAllAreas.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getAllAreas.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })
            
    }
})

export const areaReducer = areaSlice.reducer;

