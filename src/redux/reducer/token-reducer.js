import { createSlice } from "@reduxjs/toolkit";

// create the slice
const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;