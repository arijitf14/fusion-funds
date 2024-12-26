import { showLoader } from "@redux/spinnerLoader";
import { RootState } from "@redux/store";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const LoaderSpinner = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.loaderSpin.showLoader);
  setTimeout(() => {
    dispatch(showLoader(false));
  }, 4000);
  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            background: "rgba(0, 0, 0, 0.3)",
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner
            animation="border"
            role="status"
            style={{
              color: "white",
              width: "8vh",
              height: "8vh",
            }}
          />
        </div>
      )}
    </>
  );
};
export default LoaderSpinner;
