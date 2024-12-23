/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface AuthState {
  accessToken: string
  accessTokenExpiry: number
  refreshToken: string
  refreshTokenExpiry: number
  name: string
  email: string
  merchantID: string
  twoFaPref: string
}

const initialState: AuthState = {
  accessToken: "",
  accessTokenExpiry: 0,
  refreshToken: "",
  refreshTokenExpiry: 0,
  name: "",
  email: "",
  merchantID: "",
  twoFaPref: ""
}

const authSlice = createSlice({
  name: "authDetails",
  initialState,
  reducers: {
    save: (_, action: PayloadAction<AuthState>) => {
      return action.payload
    },
    savePref: (_, action: PayloadAction<string>) => {
      return { ...initialState, twoFaPref: action.payload }
    },
    clear: () => {
      return initialState 
    },
  },
})

export const { save, clear, savePref } = authSlice.actions

export default authSlice.reducer
