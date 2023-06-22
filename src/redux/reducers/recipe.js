import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getRecipeById = createAsyncThunk(
    'recipe/getRecipeById',
    async(id, {rejectWithValue}) => {
        try {

            const res = await axios(`lookup.php?i=${id}`)

            // if(res.status !== 200){
            //     throw new Error('Can\'t fetch data by ingridient')
            // }

            return await res.data.meals
            
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const initialState = {
    recipe: [],
    status: 'idle',
    error: null
}

const recipeSlice = createSlice({
    name: 'recipe', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecipeById.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getRecipeById.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getRecipeById.fulfilled, (state, action)=> {
                state.recipe = action.payload
                state.status = 'done'
            })
            
    }
})

export const recipeReducer = recipeSlice.reducer