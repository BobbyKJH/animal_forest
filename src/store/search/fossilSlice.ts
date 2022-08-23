import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface bugState {
  fossil: string;
  search: string;
  page: number;
}

const initialState: bugState = {
  // 카드 검색 버튼
  fossil: "",
  // Input Value
  search: "",
  page: 0,
};

export const fossilSlice = createSlice({
  name: "fossil",
  initialState,
  reducers: {
    fossilList: (state, action: PayloadAction<string>) => {
      state.fossil = action.payload;
    },

    fossilSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    fossilPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.page = 0;
      }
      state.page += action.payload;
    },

    fossilReset: (state) => {
      state.fossil = "";
      state.search = "";
      state.page = 0;
    },
  },
});

export const { fossilList, fossilSearch, fossilPage, fossilReset } =
  fossilSlice.actions;

export const fossilType = (state: RootState) => state.fossil;

export default fossilSlice.reducer;
