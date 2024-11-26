import { useState } from "react";
import { Row, Col, Form as BsForm } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";
import { MyCustomModal } from "@components/core/Modal";
import TwoFA from "@components/TwoFA/TwoFA";
import "./Login.css";
import CustomField from "@components/core/Input/CustomFieldProps";
import VolumeIcon from "@assets/svg/volume.svg?react";
import RefreshIcon from "@assets/svg/refresh.svg?react";

const Login = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState<boolean>(false);

  const initialValues = {
    email: "",
    password: "",
    captcha: "",
    security: "",
  };

  const handleSubmit = () => {
    setModalShow(true);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter the email"),
    password: Yup.string()
      .min(1, "Password must be at least 8 characters")
      .required("Please enter the password"),
    security: Yup.string().required("Please enter the security code"),
    captcha: Yup.string().required("Please enter the captcha"),
  });

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="rounded-lg p-4 p-md-5 w-100 w-md-50">
        <Row className="w-100 h-100 ms-0">
          {/* Left Side: Image */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center flex-column flex-md-row"
          >
            <img src={logo} alt="Side Graphic" className="login-logo" />
          </Col>

          {/* Right Side: Form */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="login-form-container">
              <div className="login-form mt-4">
                <h2 className="text-start text-lg font-semibold mb-4">
                  Welcome
                </h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ touched, errors }) => (
                    <Form>
                      {/* Email Field */}
                      <CustomField
                        type="text"
                        name="email"
                        label="Enter Username"
                        placeholder="ABC"
                        touched={touched}
                        errors={errors}
                      />

                      {/* Password Field */}
                      <CustomField
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="At least 6 characters"
                        touched={touched}
                        errors={errors}
                      />

                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <div className="form-check">
                            <Field
                              type="checkbox"
                              name={"rememberMe"}
                              id={"rememberMe"}
                              className={`form-check-input`}
                            />
                            <label
                              htmlFor={"rememberMe"}
                              className="form-check-label"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>

                        <label>Forgot Password?</label>
                      </div>

                      <hr className="my-2" />

                      {/* Security Check Field */}
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        {/* <div style={{ width: "80%"}}> */}
                          <CustomField
                            type="text"
                            name="security"
                            label="Security Check"
                            placeholder="Enter security code"
                            className="col-md-9"
                            touched={touched}
                            errors={errors}
                          />
                        {/* </div> */}

                        <div style={{width: '15%'}} className="d-flex align-items-center justify-content-between mb-2">
                            <VolumeIcon />
                            <RefreshIcon />
                        </div>
                      </div>

                      {/* Captcha Field */}
                      <CustomField
                        type="text"
                        name="captcha"
                        label="Type the word above"
                        placeholder="Enter captcha"
                        touched={touched}
                        errors={errors}
                      />

                      {/* Submit Button */}
                      <div className="d-flex justify-content-center">
                        <div className="d-grid col-md-5 mb-2">
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                        </div>
                      </div>

                      {/* Signup Link */}
                      <div className="d-flex justify-content-center align-items-center mb-0">
                        <span>
                          Don't have an account?{" "}
                          <Link to={ROUTES.SIGNUP} className="signup-link">
                            Sign up
                          </Link>
                        </span>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
        <MyCustomModal show={modalShow} onHide={() => setModalShow(false)}>
          <TwoFA
            onHide={() => setModalShow(false)}
            onSuccess={() => {
              console.log("I HAVE BEEN HIT");
              navigate(ROUTES.DASHBOARD);
            }}
          />
        </MyCustomModal>
      </div>
    </div>
  );
};

export default Login;
