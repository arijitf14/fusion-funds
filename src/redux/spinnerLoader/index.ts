
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface loaderState {
    showLoader:boolean
  }
  
  const initialState: loaderState = {
    showLoader: false,
  }

  const loaderSlice = createSlice({
    name: "loaderSpin",
    initialState,
    reducers: {
      showLoader: (_, action: PayloadAction<boolean>) => {
        return {...initialState, showLoader: action.payload}
      },
    },
  })

  export const { showLoader } = loaderSlice.actions
  
  export default loaderSlice.reducer