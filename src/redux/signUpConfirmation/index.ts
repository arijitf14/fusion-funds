/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DummyAuthState {
    showModal:boolean
  }
  
  const initialState: DummyAuthState = {
    showModal: false,
  }

  const dummySlice = createSlice({
    name: "signUpConfirmationDetails",
    initialState,
    reducers: {
      showNotifyModal: (_, action: PayloadAction<boolean>) => {
        return {...initialState, showModal: action.payload}
      },
      clearShowNotifyModal: () => {
            return initialState 
          },
    },
  })

  export const { showNotifyModal, clearShowNotifyModal } = dummySlice.actions
  
  export default dummySlice.reducer