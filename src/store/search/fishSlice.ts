import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface fishState {
  fish: string;
  search: string;
  page: number;
}

const initialState: fishState = {
  // 카드 검색 버튼
  fish: "",
  // Input Value
  search: "",
  page: 0,
};

export const fishSlice = createSlice({
  name: "fish",
  initialState,
  reducers: {
    fishList: (state, action: PayloadAction<string>) => {
      state.fish = action.payload;
    },

    fishSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    fishPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.page = 0;
      }
      state.page += action.payload;
    },

    fishReset: (state) => {
      state.fish = "";
      state.search = "";
      state.page = 0;
    },
  },
});

export const { fishList, fishSearch, fishPage, fishReset } = fishSlice.actions;

export const fishType = (state: RootState) => state.fish;

export default fishSlice.reducer;
