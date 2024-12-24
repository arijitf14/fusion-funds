import { Spinner } from "react-bootstrap";

 const LoaderSpinner = () => {
  return (
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
  )
};
export default LoaderSpinner

