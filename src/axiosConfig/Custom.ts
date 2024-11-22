import axios from "axios"
import {
  onRequestError,
  onRequestSuccess,
  onResponseError,
  onResponseSucess,
} from "./apiConfig"

const TIMEOUT = 1 * 60 * 1000
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: TIMEOUT,
})

instance.interceptors.request.use(onRequestSuccess, onRequestError)
instance.interceptors.response.use(onResponseSucess, onResponseError)

export default instance
