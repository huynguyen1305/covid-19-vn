import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/counterSlice";
import ToggleModeThemeReducer from "../features/toggleModeTheme/toggleModeThemeSlice";
import { rtkClient } from "../services/rtkQueryClient";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    toggleModeTheme: ToggleModeThemeReducer,
    [rtkClient.reducerPath]: rtkClient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkClient.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
