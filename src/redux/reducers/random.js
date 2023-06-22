import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getRandomMeal = createAsyncThunk(
    'random/getRandomMeal',
    async(_, {rejectWithValue}) => {
        try {

            const res = await axios('random.php')

            //  if(res.status !== 200){
            //      throw new Error('Can\'t fetch random meal')
            //  }

            return  res.data.meals
            
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


const randomSlice = createSlice({
    name: 'random',
    initialState,
    reducers: {},
     extraReducers: (builder) => {
        builder
            .addCase(getRandomMeal.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getRandomMeal.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getRandomMeal.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })
            
    }

})

export const randomReducer = randomSlice.reducer;