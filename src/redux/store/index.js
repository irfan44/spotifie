import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../reducer/token-reducer";

// Create the store
const store = configureStore({
    reducer: {
        token: tokenReducer,
    },
});

export default store;



