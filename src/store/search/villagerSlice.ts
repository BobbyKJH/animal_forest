import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface villagerState {
  villager: string;
  search: string;
  select: string;
  page: number;
}

const initialState: villagerState = {
  villager: "",
  search: "",
  select: "",
  page: 0,
};

export const villagerSlice = createSlice({
  name: "villager",
  initialState,
  reducers: {
    villagerList: (state, action: PayloadAction<string>) => {
      state.villager = action.payload;
    },

    villagerSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    villagerSelect: (state, action: PayloadAction<string>) => {
      state.select = action.payload;
    },

    villagerPage: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        state.page = 0;
      }
      state.page += action.payload;
    },

    villagerReset: (state) => {
      state.villager = "";
      state.search = "";
      state.select = "";
      state.page = 0;
    },
  },
});

export const {
  villagerList,
  villagerSearch,
  villagerSelect,
  villagerPage,
  villagerReset,
} = villagerSlice.actions;

export const villagerType = (state: RootState) => state.villager;

export default villagerSlice.reducer;
