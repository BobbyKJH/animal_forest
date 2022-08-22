import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface bugState {
  bug: string;
  bugSearch: string;
  bugPage: number;
}

const initialState: bugState = {
  // 카드 검색 버튼
  bug: "",
  // Input Value
  bugSearch: "",
  bugPage: 0,
};

export const bugSlice = createSlice({
  name: "bug",
  initialState,
  reducers: {
    bugList: (state, action: PayloadAction<string>) => {
      state.bug = action.payload;
    },

    bugSearch: (state, action: PayloadAction<string>) => {
      state.bugSearch = action.payload;
    },

    bugPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.bugPage = 0;
      }
      state.bugPage += action.payload;
    },
  },
});

export const { bugList, bugSearch, bugPage } = bugSlice.actions;

export const bugType = (state: RootState) => state.bug;

export default bugSlice.reducer;
