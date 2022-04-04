import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
export const initialState = {
  loading: false,
  error: false,
  items: [],
};

// our slice
const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

// export the actions
export const { setLoading, setItems, setError } = itemSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const itemsSelector = (state: any) => state.items;

// export the default reducer
export default itemSlice.reducer;

// set up axios - simple json-server prototype config here
const api = axios.create({
  baseURL: "https://6249efe8fd7e30c51c08ed2b.mockapi.io/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// fetch all items
export function fetchItems() {
  return async (dispatch: any) => {
    api
      .get("/items")
      .then((response: any) => {
        console.log('response', response)
        dispatch(setItems(response.data));
      })
      .catch((er: any) => {
        dispatch(setError());
      });
  };
}