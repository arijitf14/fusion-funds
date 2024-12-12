import { RootState } from "@redux/store"
import { useSelector } from "react-redux"

const useAccessToken = () => {
  const accessToken = useSelector(
    (globalState: RootState) => globalState.authDetails.accessToken,
  )
  return accessToken
}

export default useAccessToken
