import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: productSlice,
    carts: cartSlice,
    search:searchSlice
  },
});
