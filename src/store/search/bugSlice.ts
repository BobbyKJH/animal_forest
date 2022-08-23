import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface bugState {
  bug: string;
  search: string;
  page: number;
}

const initialState: bugState = {
  // 카드 검색 버튼
  bug: "",
  // Input Value
  search: "",
  page: 0,
};

export const bugSlice = createSlice({
  name: "bug",
  initialState,
  reducers: {
    bugList: (state, action: PayloadAction<string>) => {
      state.bug = action.payload;
    },

    bugSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    bugPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.page = 0;
      }
      state.page += action.payload;
    },
    bugReset: (state) => {
      state.bug = "";
      state.search = "";
      state.page = 0;
    },
  },
});

export const { bugList, bugSearch, bugPage, bugReset } = bugSlice.actions;

export const bugType = (state: RootState) => state.bug;

export default bugSlice.reducer;
