import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import products from "../../api/products";
import { TProduct, TProductState } from "./types";
import {
  ERROR,
  GET_PRODUCTS_ASYNC_THUNK_NAME,
  IDLE,
  PENDING,
  PRODUCT,
} from "../../utils/constants";

export const getProducts = createAsyncThunk(
  GET_PRODUCTS_ASYNC_THUNK_NAME,
  async (_, thunkAPI) => {
    const { data } = await products.getProducts(thunkAPI.signal);
    return data as TProduct[];
  },
);

const initialState: TProductState = {
  products: [],
  status: PENDING,
};

const productSlice = createSlice({
  name: PRODUCT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = PENDING;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = ERROR;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.status = IDLE;
      });
    builder;
  },
});

export default productSlice;
