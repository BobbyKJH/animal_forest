import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface fishState {
  sea: string;
  seaSearch: string;
  seaPage: number;
}

const initialState: fishState = {
  // 카드 검색 버튼
  sea: "",
  // Input Value
  seaSearch: "",
  seaPage: 0,
};

export const seaSlice = createSlice({
  name: "sea",
  initialState,
  reducers: {
    seaList: (state, action: PayloadAction<string>) => {
      state.sea = action.payload;
    },

    seaSearch: (state, action: PayloadAction<string>) => {
      state.seaSearch = action.payload;
    },

    seaPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.seaPage = 0;
      }
      state.seaPage += action.payload;
    },
  },
});

export const { seaList, seaSearch, seaPage } = seaSlice.actions;

export const seaType = (state: RootState) => state.sea;

export default seaSlice.reducer;
