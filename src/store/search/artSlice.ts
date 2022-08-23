import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface bugState {
  art: string;
  search: string;
  page: number;
}

const initialState: bugState = {
  /* 카드 검색 버튼 */
  art: "",
  /* Input Value */
  search: "",
  page: 0,
};

export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
    artList: (state, action: PayloadAction<string>) => {
      state.art = action.payload;
    },

    artSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    artPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.page = 0;
      }
      state.page += action.payload;
    },

    artReset: (state) => {
      state.art = "";
      state.search = "";
      state.page = 0;
    },
  },
});

export const { artList, artSearch, artPage, artReset } = artSlice.actions;

export const artType = (state: RootState) => state.art;

export default artSlice.reducer;
