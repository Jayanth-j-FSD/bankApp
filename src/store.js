// store.js
import { configureStore } from '@reduxjs/toolkit';
import tableDataReducer from './reducers/tableDataReducer';

const store = configureStore({
  reducer: {
    tableData: tableDataReducer,   
  },
});

export default store;
