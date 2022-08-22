import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface bugState {
  fossil: string;
  fossilSearch: string;
  fossilPage: number;
}

const initialState: bugState = {
  // 카드 검색 버튼
  fossil: "",
  // Input Value
  fossilSearch: "",
  fossilPage: 0,
};

export const fossilSlice = createSlice({
  name: "fossil",
  initialState,
  reducers: {
    fossilList: (state, action: PayloadAction<string>) => {
      state.fossil = action.payload;
    },

    fossilSearch: (state, action: PayloadAction<string>) => {
      state.fossilSearch = action.payload;
    },

    fossilPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.fossilPage = 0;
      }
      state.fossilPage += action.payload;
    },
  },
});

export const { fossilList, fossilSearch, fossilPage } = fossilSlice.actions;

export const fossilType = (state: RootState) => state.fossil;

export default fossilSlice.reducer;
