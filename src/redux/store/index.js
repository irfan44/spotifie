import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../reducer/token-reducer";
import userProfileReducer from "../reducer/user-profile-reducer";

// Create the store
const store = configureStore({
  reducer: {
    token: tokenReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
