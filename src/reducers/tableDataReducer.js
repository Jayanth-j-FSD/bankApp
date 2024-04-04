// reducers/tableDataReducer.js
import { createSlice } from "@reduxjs/toolkit";

const tableDataSlice = createSlice({
  name: "tableData",
  initialState: {
    allData: [],
    savingsData: [],
    investmentData: [],
    currentData: [],
    headers: [],
    selectedCard: "",
    selectedOption: "",
    selectedOption2: "",
    active: [],
    inActive: [],
    accNumbers: [],
    custom: [],

    // Add more slices as needed
  },
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    setSavingsData: (state, action) => {
      state.savingsData = action.payload;
    },
    setInvestmentData: (state, action) => {
      state.investmentData = action.payload;
    },
    setCurrentData: (state, action) => {
      state.currentData = action.payload;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    setHeaders: (state, action) => {
      state.headers = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setSelectedOption2: (state, action) => {
      state.selectedOption2 = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setInactive: (state, action) => {
      state.inActive = action.payload;
    },
    setAccNumbers: (state, action) => {
      state.accNumbers = action.payload;
    },
    setCustom: (state, action) => {
      state.custom = action.payload;
    },

    //more actions
  },
});

export const {
  setAllData,
  setSavingsData,
  setInvestmentData,
  setCurrentData,
  setSelectedCard,
  setHeaders,
  setSelectedOption,
  setSelectedOption2,
  setActive,
  setInactive,
  setAccNumbers,
  setCustom,
} = tableDataSlice.actions;
export default tableDataSlice.reducer;
