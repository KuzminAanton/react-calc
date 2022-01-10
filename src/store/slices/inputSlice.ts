import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface InputSliceType {
  value: string
}

const initialState: InputSliceType = {
  value: ''
}

export const inputSlice = createSlice({
  name: "inputNumbersSlice",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    clearValue: (state) => {
      state.value = initialState.value
    }
  }
})

export const {changeValue,clearValue} = inputSlice.actions;
export default inputSlice.reducer;