import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PageState {
  value: number;
}

const initialState: PageState = {
  value: 0,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 9;
    },
    decrease: (state) => {
      state.value -= 9;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increase, decrease, reset } = pageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const pageCount = (state: RootState) => state.page.value;

export default pageSlice.reducer;
