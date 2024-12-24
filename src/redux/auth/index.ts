/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string;
  accessTokenExpiry: number;
  refreshToken: string;
  refreshTokenExpiry: number;
  name: string;
  email?: string;
  merchantID: string;
  twoFaPref: string;
  userName?: string;
  mobile?: string;
}
export interface SignUpDetailState {
  email: string;
  userName: string;
  mobile: string;
}

const initialState: AuthState = {
  accessToken: "",
  accessTokenExpiry: 0,
  refreshToken: "",
  refreshTokenExpiry: 0,
  name: "",
  email: "",
  merchantID: "",
  twoFaPref: "",
  userName: "",
  mobile: "",
};

const authSlice = createSlice({
  name: "authDetails",
  initialState,
  reducers: {
    save: (_, action: PayloadAction<AuthState>) => {
      return action.payload;
    },
    savePref: (_, action: PayloadAction<string>) => {
      return { ...initialState, twoFaPref: action.payload };
    },
    signUpDetail: (_, action: PayloadAction<SignUpDetailState>) => {
      return {
        ...initialState,
        userName: action.payload.userName,
        mobile: action.payload.mobile,
        email: action.payload.email,
      };
    },
    clear: () => {
      return initialState;
    },
  },
});

export const { save, clear, savePref,signUpDetail } = authSlice.actions;

export default authSlice.reducer;
