import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { timeout } from "d3";
import { User } from "../types/User"
// import { UsersData } from "../FakeData"

//Defining our initialState's type
// type initialStateType = {
//   user: User[];
// };

export const loginUser = createAsyncThunk(
  "users/login",
  async () => {
    // const res = await timeout(function() { return { data: {} } }, 100);
    return loggedStateValue;
  }
);

const initialStateValue = {
  id: 0,
  name: "",
  email: "",
  is_logged: false,
  is_fetching: false,
  is_success: false,
  is_error: false,
  error_message: "",
};

const loggedStateValue = {
  id: 1,
  name: "Ivan Herrera",
  email: "ivan@gmail.com",
  is_logged: true,
  is_fetching: false,
  is_success: true,
  is_error: false,
  error_message: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue},
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue
    },
    clearState: (state) => {
      state.value.is_error = false;
      state.value.is_success = false;
      state.value.is_fetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, state => {
      state.value.is_fetching = true;
    })
    .addCase(loginUser.fulfilled, (state, { payload }) => {
      state.value.email = payload.email;
      state.value.name = payload.name;
      state.value.is_fetching = false;
      state.value.is_success = true;
      state.value.is_logged = true;
      return state;
    })
    .addCase(loginUser.rejected, (state, { payload }) => {
      console.log('payload', payload);
      state.value.is_fetching = false;
      state.value.is_error = true;
      // state.value.error_message = payload.message;
    });
  }
});

export const { login, logout, clearState } = userSlice.actions;

export default userSlice.reducer;