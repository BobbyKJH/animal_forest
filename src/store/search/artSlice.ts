import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface bugState {
  art: string;
  artSearch: string;
  artPage: number;
}

const initialState: bugState = {
  // 카드 검색 버튼
  art: "",
  // Input Value
  artSearch: "",
  artPage: 0,
};

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    artList: (state, action: PayloadAction<string>) => {
      state.art = action.payload;
    },

    artSearch: (state, action: PayloadAction<string>) => {
      state.artSearch = action.payload;
    },

    artPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.artPage = 0;
      }
      state.artPage += action.payload;
    },
  },
});

export const { artList, artSearch, artPage } = artSlice.actions;

export const artType = (state: RootState) => state.art;

export default artSlice.reducer;
