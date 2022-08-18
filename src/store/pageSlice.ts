import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface PageState {
  value: number;
}

// Define the initial state using that type
const initialState: PageState = {
  value: 0,
};

export const pageSlice = createSlice({
  name: "pageCount",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 9;
    },
    decrease: (state) => {
      state.value -= 9;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increase, decrease, reset } = pageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const pageCount = (state: RootState) => state.page.value;

export default pageSlice.reducer;
