import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const getAllCategories = createAsyncThunk(
    'categories/getAllCategories',
    async (_, {rejectWithValue})=> {
        try {
            const res = await axios(`/categories.php`)
               
            //   if(res.status !== 200){
            //       throw new Error('Can\'t fetch  data categories')
            //   }
                   

            return await res.data.categories
            
        } catch (error) {
            return rejectWithValue(error.message)
        }

    },
    { 
        condition: (_, {getState}) => {
            const {loading} = getState().categories

            if(loading === 'loading'){
                return false
            }
        }
    }
)





const initialState = {
    data: [],
    filter: {
        category: 'all',
        ingridient: ''
    },
    error: null,
    status: 'idle'
}

const categoriesSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.filter = {
                ...state.filter,
                category: action.payload
            }
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state, action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getAllCategories.rejected, (state, action)=> {
                state.error = action.payload
                state.status = 'error'
            })
            .addCase(getAllCategories.fulfilled, (state, action)=> {
                state.data = action.payload
                state.status = 'done'
            })
            
    }
})


export const {changeCategory} = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

