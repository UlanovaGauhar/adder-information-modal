import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: localStorage.getItem('modalVisible') === 'true',
  toggleVisible: false,
  items: [], 
};
const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: { 
    toggleVisible: (state) => {
      state.toggle = !state.toggle;
      localStorage.setItem('modalVisible', state.toggle);
      console.log('localStorage updated:', state.toggle);
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
export const { actions: listActions, reducer: listReducer } = listSlice;
