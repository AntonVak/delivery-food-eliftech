import { createAsyncThunk } from "@reduxjs/toolkit";
import getAllMeals from "../../api/api.meals";



export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (id, {rejectWithValue}) => {
        try{
            const dataMeals = await getAllMeals(id);
            return dataMeals;
        } catch (err){
            return rejectWithValue(err.message)
        }
    }
)