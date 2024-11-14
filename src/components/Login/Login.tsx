import "./Login.css";
import { Row, Col } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <Row className="align-items-center">
          <Col xs={12} lg={5}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "140px", width: "300px" }} // Inline styling
            />
            <div className="login-form">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Welcome
              </h2>
              {/*  */}
            </div>
          </Col>
          {/*  */}
        </Row>
      </div>
    </div>
  );
};

export default Login;
