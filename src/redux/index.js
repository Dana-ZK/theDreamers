import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import itemCardReducer from './itemCard/reducer'

export const store = configureStore({
  reducer:{
    cart: cartReducer,
    itemCard: itemCardReducer,
  }
})