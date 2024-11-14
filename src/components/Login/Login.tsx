import "./Login.css";
import { Row, Col } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <Row className="h-100">
          {" "}
          {/* Ensure the Row takes full height */}
          <Col
            xs={12}
            lg={5}
            className="d-flex flex-column justify-center align-items-center h-100"
          >
            <div
              className="d-flex justify-content-center align-items-center flex-grow-1"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "140px", width: "300px" }} // Inline styling
              />
            </div>

            <div className="login-form mt-4">
              {" "}
              {/* Add margin-top for spacing */}
              <h2 className="text-3xl font-semibold mb-4">Welcome</h2>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
