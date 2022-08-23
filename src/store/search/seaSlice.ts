import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface fishState {
  sea: string;
  search: string;
  page: number;
}

const initialState: fishState = {
  // 카드 검색 버튼
  sea: "",
  // Input Value
  search: "",
  page: 0,
};

export const seaSlice = createSlice({
  name: "sea",
  initialState,
  reducers: {
    seaList: (state, action: PayloadAction<string>) => {
      state.sea = action.payload;
    },

    seaSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    seaPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.page = 0;
      }
      state.page += action.payload;
    },

    seaReset: (state) => {
      state.sea = "";
      state.search = "";
      state.page = 0;
    },
  },
});

export const { seaList, seaSearch, seaPage, seaReset } = seaSlice.actions;

export const seaType = (state: RootState) => state.sea;

export default seaSlice.reducer;
