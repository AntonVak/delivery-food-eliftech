import { createAsyncThunk } from "@reduxjs/toolkit";
import getAllRestaurants from "../../api/api.restaurant";

export const getRestaurants = createAsyncThunk(
  "restaurants/getAllRestaurants",
  // первій аргумент,то что передается в action. если нет - "_"
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllRestaurants();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
