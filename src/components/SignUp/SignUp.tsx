import "./SignUp.css";
import { Row, Col, Form as BsForm } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";
import { MyCustomModal } from "@components/core/Modal";
import { useState } from "react";
import TwoFA from "@components/TwoFA/TwoFA";

const SignUp = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState<boolean>(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = () => {
    // navigate(ROUTES.TwoFA);
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
            <div className="signup-form-container">
            <div className="signup-form mt-4">
              <h2 className="text-start text-lg font-semibold mb-4">Sign Up</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, touched, errors }) => (
                  <Form>
                    <div className="form-group mb-3">
                      <label htmlFor="name">Full Name</label>
                      <Field
                        type="text" // Changed to password field
                        id="name"
                        name="name"
                        autoComplete="off"
                        placeholder="Example Name"
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

                    <div className="row">
                      <div className="form-group col-md-6 mb-3">
                        <label htmlFor="mobile">Mobile Number</label>
                        <Field
                          type="text" // Changed to password field
                          name="mobile"
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

                      <div className="form-group col-md-6 mb-3">
                        <label htmlFor="email">Email</label>
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
                    </div>

                    <div className="d-grid mb-2">
                      <button type="submit" className="btn btn-primary">
                        Verify
                      </button>
                    </div>

                    <div className="text-center mt-3">
                      <span>
                        Already have an account?{" "}
                        <Link
                          to={"/"}
                           className="login-link"
                        >
                          Login
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
              navigate(ROUTES.CREATE_ACCOUNT);
            }}
          />
        </MyCustomModal>
      </div>
    </div>
  );
};

export default SignUp;
