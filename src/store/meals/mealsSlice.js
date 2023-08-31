import { createSlice } from "@reduxjs/toolkit";
import { getMeals } from "./thunks";


const initialState = {
    meals: [],
    isLoading: false,
    error: null,
    
  };

  const mealsSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: (builder) => 
    builder
    .addCase(getMeals.pending, (state) => {
        state.isLoading = true;
        
    })
    .addCase(getMeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.meals = action.payload;
        
    })
    .addCase(getMeals.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        
    })
  })

  export const mealsReducer = mealsSlice.reducer