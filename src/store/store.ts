import { configureStore } from "@reduxjs/toolkit";

import villagerSlice from "./search/villagerSlice";
import fishSlice from "./search/fishSlice";
import bugSlice from "./search/bugSlice";
import seaSlice from "./search/seaSlice";
import artSlice from "./search/artSlice";
import fossilSlice from "./search/fossilSlice";

export const store = configureStore({
  reducer: {
    villager: villagerSlice,
    fish: fishSlice,
    bug: bugSlice,
    sea: seaSlice,
    art: artSlice,
    fossil: fossilSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
