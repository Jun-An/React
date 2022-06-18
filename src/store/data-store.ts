import { configureStore } from "@reduxjs/toolkit";
import dataStoreReducer from "./data-slice";

const store = configureStore({
  reducer: {
    dataStore: dataStoreReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
