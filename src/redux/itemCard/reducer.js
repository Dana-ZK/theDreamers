import { createSlice } from "@reduxjs/toolkit";

const itemCardSlice = createSlice({
  name:'itemCard',
  initialState:{
    currentItemCard:null
  },
  reducers:{
    setCurrentItemCard: (state, action) => {
      state.currentItemCard = action.payload
    },
  }
});

export const {setCurrentItemCard} = itemCardSlice.actions;

export default itemCardSlice.reducer;