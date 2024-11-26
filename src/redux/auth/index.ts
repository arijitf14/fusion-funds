/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface AuthState {
  accessToken: string
  accessTokenExpiry: number
  refreshToken: string
  refreshTokenExpiry: number
  name: string
  email: string
}

const initialState: AuthState = {
  accessToken: "",
  accessTokenExpiry: 0,
  refreshToken: "",
  refreshTokenExpiry: 0,
  name: "",
  email: "",
}

const authSlice = createSlice({
  name: "authDetails",
  initialState,
  reducers: {
    save: (_, action: PayloadAction<AuthState>) => {
      return action.payload
    },
    clear: () => {
      return initialState
    },
  },
})

export const { save, clear } = authSlice.actions

export default authSlice.reducer
