import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface fishState {
  fish: string;
  fishSearch: string;
  fishPage: number;
}

const initialState: fishState = {
  // 카드 검색 버튼
  fish: "",
  // Input Value
  fishSearch: "",
  fishPage: 0,
};

export const fishSlice = createSlice({
  name: "fish",
  initialState,
  reducers: {
    fishList: (state, action: PayloadAction<string>) => {
      state.fish = action.payload;
    },

    fishSearch: (state, action: PayloadAction<string>) => {
      state.fishSearch = action.payload;
    },

    fishPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.fishPage = 0;
      }
      state.fishPage += action.payload;
    },
  },
});

export const { fishList, fishSearch, fishPage } = fishSlice.actions;

export const fishType = (state: RootState) => state.fish;

export default fishSlice.reducer;
