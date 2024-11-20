import React, { useState } from "react";
import { Row, Col, Form as BsForm } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";
import { ModalSize, MyCustomModal } from "@components/core/Modal";
import TwoFA from "@components/TwoFA/TwoFA";
import "./Login.css";
 
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
    email: Yup.string().email("Invalid email"),
    password: Yup.string().min(1, "Password must be at least 8 characters"),
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
            <img
              src={logo}
              alt="Side Graphic"
              className="login-logo"
            />
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
                      <div className="form-group mb-3">
                        <label htmlFor="email">Enter Email Id</label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="example@gmail.com"
                          autoComplete="off"
                          className={`form-control ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        />
                        {touched.email && errors.email && (
                          <BsForm.Control.Feedback type="invalid">
                            {errors.email}
                          </BsForm.Control.Feedback>
                        )}
                      </div>
 
                      {/* Password Field */}
                      <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          autoComplete="off"
                          placeholder="At least 6 characters"
                          className={`form-control ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {touched.password && errors.password && (
                          <BsForm.Control.Feedback type="invalid">
                            {errors.password}
                          </BsForm.Control.Feedback>
                        )}
                      </div>
 
                      {/* Security Check Field */}
                      <div className="form-group mb-3">
                        <label htmlFor="security">Security Check</label>
                        <Field
                          type="text"
                          id="security"
                          name="security"
                          placeholder="Enter security code"
                          className={`form-control ${
                            touched.security && errors.security
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {touched.security && errors.security && (
                          <BsForm.Control.Feedback type="invalid">
                            {errors.security}
                          </BsForm.Control.Feedback>
                        )}
                      </div>
 
                      {/* Captcha Field */}
                      <div className="form-group mb-3">
                        <label htmlFor="captcha">Type the word above</label>
                        <Field
                          type="text"
                          id="captcha"
                          name="captcha"
                          placeholder="Enter captcha"
                          className={`form-control ${
                            touched.captcha && errors.captcha
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {touched.captcha && errors.captcha && (
                          <BsForm.Control.Feedback type="invalid">
                            {errors.captcha}
                          </BsForm.Control.Feedback>
                        )}
                      </div>
 
                      {/* Submit Button */}
                      <div className="d-grid mb-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          Login
                        </button>
                      </div>
 
                      {/* Signup Link */}
                      <div className="d-flex justify-content-center align-items-center mb-0">
                        <span>
                          Don't have an account?{" "}
                          <Link
                            to={ROUTES.SIGNUP}
                            className="signup-link"
                          >
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
          <TwoFA onHide={() => setModalShow(false)} onSuccess={() => {console.log("I HAVE BEEN HIT");navigate(ROUTES.DASHBOARD)}} />
        </MyCustomModal>
      </div>
    </div>
  );
};
 
export default Login;