import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mail: "",
  nombre: "",
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer