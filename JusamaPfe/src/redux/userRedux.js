import { createSlice } from "@reduxjs/toolkit";    //userRedux.JS

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
  updateStart: (state) => {
    state.isFetching = true;
    state.error = false;
  },
  updateSuccess: (state, action) => {
    state.isFetching = false;
    state.currentUser[
      state.currentUser.findIndex((item) => item._id === action.payload.id)
    ] = action.payload.currentUser;
  },
  updateFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
});

export const { loginStart, loginSuccess, loginFailure, registerFailure, registerSuccess, registerStart,updateFailure,updateStart,updateSuccess } = userSlice.actions;
export default userSlice.reducer; 