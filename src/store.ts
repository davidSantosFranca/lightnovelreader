import { configureStore } from "@reduxjs/toolkit";
import { blobStorageApi } from "./api/blobStorage.api";

export const store = configureStore({
  reducer: {
    [blobStorageApi.reducerPath]: blobStorageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blobStorageApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
