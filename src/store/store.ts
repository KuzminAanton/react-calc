import {combineReducers, configureStore} from "@reduxjs/toolkit";
import inputReducer from "./slices/inputSlice";

export const store = configureStore({
  reducer: inputReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch