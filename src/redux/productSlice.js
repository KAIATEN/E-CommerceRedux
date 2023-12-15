import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";
import axios from "axios";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=100");
  return response.data.products;
});

export const getCategoryProducts = createAsyncThunk(
  "getCategoryProducts",
  async (category) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data.products;
  }
);

export const getDetailProduct = createAsyncThunk(
  "getDetailProduct",
  async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productStatus = STATUS.FAIL;
    });
    //id
    builder.addCase(getDetailProduct.pending, (state, action) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    });
    builder.addCase(getDetailProduct.rejected, (state, action) => {
      state.productDetailStatus = STATUS.FAIL;
    });
    //category
    builder.addCase(getCategoryProducts.pending, (state, action) => {
      state.productStatus = STATUS.LOADING;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.productStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.productStatus = STATUS.FAIL;
    });
  },
});

export default productSlice.reducer;
