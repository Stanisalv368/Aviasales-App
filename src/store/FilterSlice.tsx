import { createSlice } from "@reduxjs/toolkit";

import { FilterType } from "../Types";

const initialState: FilterType = {
  all: true,
  nonStop: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
  sortPrice: true,
};

const FilterSlice = createSlice({
  name: "filterT",
  initialState,
  reducers: {
    checkAll(state) {
      state.all = !state.all;
      if (state.all) {
        state.nonStop = true;
        state.oneTransfer = true;
        state.twoTransfer = true;
        state.threeTransfer = true;
      } else {
        state.nonStop = false;
        state.oneTransfer = false;
        state.twoTransfer = false;
        state.threeTransfer = false;
      }
    },
    checkNon(state) {
      if (!state.all) {
        state.nonStop = !state.nonStop;
        if (state.oneTransfer && state.twoTransfer && state.threeTransfer) {
          state.all = true;
        }
      } else {
        state.nonStop = !state.nonStop;
        state.all = false;
      }
    },
    checkOne(state) {
      if (!state.all) {
        state.oneTransfer = !state.oneTransfer;
        if (state.nonStop && state.twoTransfer && state.threeTransfer) {
          state.all = true;
        }
      } else {
        state.oneTransfer = !state.oneTransfer;
        state.all = false;
      }
    },
    checkTwo(state) {
      if (!state.all) {
        state.twoTransfer = !state.twoTransfer;
        if (state.oneTransfer && state.nonStop && state.threeTransfer) {
          state.all = true;
        }
      } else {
        state.twoTransfer = !state.twoTransfer;
        state.all = false;
      }
    },
    checkThree(state) {
      if (!state.all) {
        state.threeTransfer = !state.threeTransfer;
        if (state.oneTransfer && state.twoTransfer && state.nonStop) {
          state.all = true;
        }
      } else {
        state.threeTransfer = !state.threeTransfer;
        state.all = false;
      }
    },
    sortPriceOn(state) {
      if (!state.sortPrice) state.sortPrice = !state.sortPrice;
    },

    sortTime(state) {
      if (state.sortPrice) state.sortPrice = !state.sortPrice;
    },
  },
});

export const { checkAll, checkNon, checkOne, checkThree, checkTwo, sortPriceOn, sortTime } = FilterSlice.actions;
export default FilterSlice.reducer;
