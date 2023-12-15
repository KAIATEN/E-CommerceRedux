import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("getCategories",async()=>{
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    ); 
    return response.data;
});

export const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
  },
  extraReducers:(builder) =>{
    builder.addCase(getCategories.fulfilled, (state,action)=>{
        state.categories = action.payload;
    })
  }
});

export default CategorySlice.reducer;
