import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";
import axios from "axios";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const searchProducts = createAsyncThunk(
  "searchProducts",
  async (keyword) => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${keyword}`
    );
    return response.data.products;
  }
);
export const getSearchDetailProduct = createAsyncThunk(
  "getSearchDetailProduct",
  async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  }
);
const searchSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchProducts.pending, (state, action) => {
      state.productStatus = STATUS.LOADING;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.productStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.productStatus = STATUS.FAIL;
    });
  },
});

export default searchSlice.reducer;
