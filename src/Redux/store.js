import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import countReducer from "./Slice/countSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer,
  },
});

export default store;
