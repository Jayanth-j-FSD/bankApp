const tableDataReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TABLE_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  export default tableDataReducer;


// import { createSlice } from '@reduxjs/toolkit';

// const tableDataSlice = createSlice({
//   name: 'tableData',
//   initialState: [],
//   reducers: {
//     setTableData: (state, action) => {
//       return action.payload;
//     },
//     // Add other actions as needed
//   },
// });

// export const { setTableData } = tableDataSlice.actions;
// export default tableDataSlice.reducer;