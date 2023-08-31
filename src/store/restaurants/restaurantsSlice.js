import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks";

const initialState = {
  restaurants: [],
  isLoading: false,
  error: null,
  
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.restaurants = action.payload;
      }).addCase(getRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const restaurantsReducer = restaurantsSlice.reducer;