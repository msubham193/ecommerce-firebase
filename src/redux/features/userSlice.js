import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const initialState = {
  user: userInfo != null ? userInfo : null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdd: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userAdd } = userSlice.actions;

export default userSlice.reducer;
