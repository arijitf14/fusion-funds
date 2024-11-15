import "./Login.css";
import { Row, Col, Form as BsForm } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = () => {
    navigate(ROUTES.TwoFA);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    password: Yup.string().min(1, "Password must be at least 8 characters"),
  });

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="rounded-lg p-4 p-md-5 w-100 w-md-50">
        <Row className="h-100">
          <Col
            xs={12}
            lg={12} // Full width on large screens
            className="d-flex flex-column justify-center align-items-center h-100"
          >
            <div className="d-flex justify-content-center align-items-center mb-4">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "120px", maxWidth: "300px" }} // Adjust the logo to be responsive
              />
            </div>

            <div className="login-form mt-4">
              <h2 className="text-start text-lg font-semibold mb-4">Welcome</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, touched, errors }) => (
                  <Form>
                    <div className="form-group mb-3">
                      <label>Enter Email Id</label>
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

                    <div className="form-group mb-3">
                      <label>Password</label>
                      <Field
                        type="password" // Changed to password field
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

                    <div className="form-group mb-3">
                      <label>Security Check</label>
                      <Field
                        type="text" // Changed to password field
                        id="security"
                        name="security"
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

                    <div className="form-group mb-3">
                      <label>Type the word above</label>
                      <Field
                        type="text" // Changed to password field
                        id="captcha"
                        name="captcha"
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

                    <div className="d-grid mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        Login
                      </button>
                    </div>

                    {/* <div className="d-flex justify-content-between mb-4">
                      <span>Don't have an account? Sign up</span>
                    </div> */}
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
