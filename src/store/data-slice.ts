import { createSlice } from "@reduxjs/toolkit";

interface DataState {
  name: string;
}

const initialState: DataState = {
  name: "Ango",
};

const dataSlice = createSlice({
  name: "dataStore",
  initialState,
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { changeName } = dataSlice.actions;

export default dataSlice.reducer;
