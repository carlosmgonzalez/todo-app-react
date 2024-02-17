import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  username: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, {payload}) => {
      const {name, email, username} = payload;

      state.name = name;
      state.email = email;
      state.username = username;
    },
    changeEmail: (state, {payload}) => {
      state.email = payload;
    },
  }
});

export const {addUser, changeEmail} = userSlice.actions;



