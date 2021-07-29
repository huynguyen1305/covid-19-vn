import { configureStore } from "@reduxjs/toolkit";
import ToggleModeThemeReducer from "../features/toggleModeTheme/toggleModeThemeSlice";
import { rtkClient } from "../services/rtkQueryClient";
import { serverDataApi } from "../services/serverDataApi";

export const store = configureStore({
  reducer: {
    toggleModeTheme: ToggleModeThemeReducer,
    [rtkClient.reducerPath]: rtkClient.reducer,
    [serverDataApi.reducerPath]: serverDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      rtkClient.middleware,
      serverDataApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
