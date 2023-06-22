import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const getFilteredCategory = createAsyncThunk(
    'category/getFilteredCategory',
    async(name, {rejectWithValue}) => {
        try {
            const res = await axios(`filter.php?c=${name}`)

                // if(res.status !== 200){
                //     throw new Error('Can\'t fetch  data category')
                // }
 
            return  await res.data.meals
            
        } catch (error) {
            return rejectWithValue(error.message)
        } 
    },
    { 
        condition: (_, {getState}) => {
            const {loading} = getState().category

            if(loading === 'loading'){
                return false
            }
        }
    }
)


const initialState = {
    data: [],
    status: 'idle',
    error: null
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilteredCategory.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getFilteredCategory.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getFilteredCategory.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })
            
    }

})

export const categoryReducer = categorySlice.reducer;