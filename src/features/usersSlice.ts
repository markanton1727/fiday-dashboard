
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/User';
import UserDataService from '../services/user.service';

const users: User[] = [];

const initialState = {
  users: users,
  loading: false,
}

export const retrieveUsers = createAsyncThunk(
  "users/retrieve",
  async () => {
    const res = await UserDataService.getAll();
    return res.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(retrieveUsers.pending, state => {
      state.loading = true;
    })
    .addCase(retrieveUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = false;
    })
    .addCase(retrieveUsers.rejected, state => {
      state.loading = false;
    });
  }
});

const { reducer } = usersSlice;
export default reducer;