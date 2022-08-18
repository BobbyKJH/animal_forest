import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface searchState {
  value: string;
}

// Define the initial state using that type
const initialState: searchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "inputValue",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cardValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetValue: (state) => {
      state.value = "";
    },
  },
});

export const { cardValue } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const inputValue = (state: RootState) => state.search.value;

export default searchSlice.reducer;
