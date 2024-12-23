/* eslint-disable @typescript-eslint/no-explicit-any */
// import { save } from "@redux/auth/auth";
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

let store: { getState: () => any; dispatch: (callback: any) => null };

export const injectStore = (_store: any) => {
  store = _store;
};

export const onRequestSuccess = (config: InternalAxiosRequestConfig<any>) => {
  const configuration = config;
  // Access any state from redux

  let token = "";
  if (configuration.url !== "/refresh-token") {
    token = store?.getState()?.authDetails?.accessToken;
  }

  if (token) {
    configuration.headers.Authorization = `Bearer ${token}`;
  }
  configuration.headers["x-api-key"] = import.meta.env.VITE_XApiKey;
  // Needed in development when using NGROK
//   configuration.headers["ngrok-skip-browser-warning"] = "1234";

  return configuration;
};

export const onRequestError = (error: any) => Promise.reject(error?.response);

export const onResponseSucess = (response: AxiosResponse<any, any>) => response;

export const onResponseError = async (error: any) => {
  if (error.response) {
    if (error.response.status === 403) {
      window.location.href = `${
        import.meta.env.VITE_BASE_PATH === "/" ? "" : import.meta.env.VITE_BASE_PATH
      }/logout`;
    }
    return Promise.reject(error.response);
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    data: {
      message:
        "Looks like the server is taking too long to respond, please try again in sometime.",
    },
  });
};
