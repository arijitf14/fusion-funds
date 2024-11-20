import { useState } from "react";
import { Row, Col, Form as BsForm } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";
import { MyCustomModal } from "@components/core/Modal";
import TwoFA from "@components/TwoFA/TwoFA";
import ReactSelect, { StylesConfig } from "react-select";
import { TReactSelectOption } from "src/models";
import { customStyles } from "src/customStyles";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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
            <img src={logo} alt="Side Graphic" className="login-logo" />
          </Col>

          {/* Right Side: Form */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="login-form-container">
              <div className="login-form mt-2">
                <h2 className="text-start text-lg font-semibold mb-4">
                  Sign Up
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
                        <label htmlFor="email">Username</label>
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
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
                      <div className="row">
                        <div className="form-group col-md-6 mb-3">
                          <label htmlFor="mobile">Mobile Number</label>
                          <Field
                            type="text" // Changed to password field
                            name="mobile"
                            placeholder="Mobile Number"
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

                      <hr className="my-2" />

                      <div className="row">
                        <div className="form-group col-md-4 mb-3">
                          <label htmlFor="mobile">First Name</label>
                          <Field
                            type="text" // Changed to password field
                            name="mobile"
                            placeholder="First Name"
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

                        <div className="form-group col-md-4 mb-3">
                          <label htmlFor="email">Middle Name</label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Middle Name"
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

                        <div className="form-group col-md-4 mb-3">
                          <label htmlFor="email">Last Name</label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Last Name"
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

                      <div className="row">
                        <div className="form-group col-md-6 mb-3">
                          <label htmlFor="mobile">Country</label>
                          <Field
                            type="text" // Changed to password field
                            name="mobile"
                            placeholder="Country"
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

                        <div className="col-md-6 mb-3">
                          <label htmlFor="email">City</label>
                          <ReactSelect
                            className={`form-control
                            }`}
                            inputId="curriculum"
                            // value={}
                            onChange={(e) => {
                              console.log("EACH ITEM", e);
                            }}
                            options={options}
                            hideSelectedOptions={false}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            styles={
                              customStyles as StylesConfig<
                                TReactSelectOption,
                                false
                              >
                            }
                          />
                          {touched.email && errors.email && (
                            <BsForm.Control.Feedback type="invalid">
                              {errors.email}
                            </BsForm.Control.Feedback>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-md-6 mb-3">
                          <label htmlFor="mobile">Province</label>
                          <Field
                            type="text" // Changed to password field
                            name="mobile"
                            placeholder="Province"
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
                          <label htmlFor="email">Zip Code</label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Zip Code"
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

                      <div className="form-group mb-3">
                        <label htmlFor="email">Address Line 1</label>
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Address Line 1"
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
                        <label htmlFor="email">Address Line 2</label>
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Address Line 2"
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
                        <label htmlFor="email">SSN</label>
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          placeholder="SSN"
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

                      {/* Submit Button */}
                      <div className="d-flex justify-content-center">
                        <div className="d-grid col-md-5 mb-2">
                          <button type="submit" className="btn btn-primary">
                            Continue
                          </button>
                        </div>
                      </div>

                      {/* Signup Link */}
                      <div className="d-flex justify-content-center align-items-center mb-0">
                        <span>
                          Already have an account?{" "}
                          <Link to={"/"} className="signup-link">
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
              navigate(ROUTES.DASHBOARD);
            }}
          />
        </MyCustomModal>
      </div>
    </div>
  );
};

export default CreateAccount;
