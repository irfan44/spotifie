import { configureStore } from '@reduxjs/toolkit';
import modalSlice from 'redux/slice/modalSlice';
import selectedTrackSlice from '../slice/selectedTrackSlice';
import selectedTrackUriSlice from '../slice/selectedTrackUriSlice';
import tokenSlice from '../slice/tokenSlice';
import userProfileSlice from '../slice/userProfileSlice';

const store = configureStore({
  reducer: {
    token: tokenSlice,
    userProfile: userProfileSlice,
    selectedTrackUri: selectedTrackUriSlice,
    selectedTrack: selectedTrackSlice,
    modal: modalSlice,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
