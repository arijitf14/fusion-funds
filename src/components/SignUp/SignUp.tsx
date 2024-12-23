import "./SignUp.css";
import { Row, Col, Form as BsForm } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";
import { MyCustomModal } from "@components/core/MyCustomModal/MyCustomModal";
import { useState } from "react";
import TwoFA from "@components/TwoFA/TwoFA";
import CustomField from "@components/core/Input/CustomFieldProps";
import { FusionLogo } from "@assets/images";
import OtpVerify from "@components/TwoFA/Otpverify";
import CustomButton from "@components/core/CustomButton/CustomEditButton";
import MobileField from "@components/core/Input/MobileField";

interface SignUpFormValues {
  name: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState<boolean>(false);

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: SignUpFormValues) => {
    console.log("sign up", values);

    // navigate(ROUTES.TwoFA);
    setModalShow(true);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Please enter a valid name")
      .required("Name is required"),
    mobile: Yup.string()
      .min(10, "Mobile must be at least 10 characters")
      .required("Mobile   is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter the email"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character."
      )
      .required("Please enter the password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm the password"),
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
            <img src={FusionLogo} alt="Side Graphic" className="login-logo" />
          </Col>

          {/* Right Side: Form */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="signup-form-container">
              <div className="signup-form">
                <h2 className="text-start text-lg font-semibold mb-3">
                  Sign Up
                </h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ touched, errors, handleSubmit, isValid, dirty }) => (
                    <Form>
                      <CustomField
                        type="text"
                        name="name"
                        label="User Name"
                        placeholder="Jonh Doe"
                        touched={touched}
                        errors={errors}
                        fieldTextSize="fieldTextSize"
                      />
                      <div className="row">
                        <MobileField
                          type="number"
                          name="mobile"
                          label="Mobile Number"
                          placeholder="Enter your mobile no"
                          className="col-md-6"
                          touched={touched}
                          errors={errors}
                          fieldTextSize="fieldTextSize"
                        />
                        <CustomField
                          type="email"
                          name="email"
                          label="Email"
                          placeholder="example@gmail.com"
                          className="col-md-6"
                          touched={touched}
                          errors={errors}
                          fieldTextSize="fieldTextSize"
                        />
                      </div>

                      <CustomField
                        type="password"
                        name="password"
                        label="Create Password"
                        placeholder="Atleast 8 characters"
                        touched={touched}
                        errors={errors}
                        fieldTextSize="fieldTextSize"
                      />

                      <CustomField
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Atleast 8 characters"
                        touched={touched}
                        errors={errors}
                        fieldTextSize="fieldTextSize"
                      />

                      <div className="d-flex justify-content-center">
                        <div className="d-grid col-md-5 my-2">
                          <CustomButton
                            onSelect={
                              isValid && dirty ? () => {} : handleSubmit
                            }
                            title="Verify"
                            containFill={true}
                            buttonDisabled={!isValid || !dirty} // Disable button if form is invalid or not modified
                          />

                          {/* <button type="submit" className="btn btn-primary">
                            Verify
                          </button> */}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center align-items-center signupLinkText mb-0 mt-2">
                        <span>
                          Already have an account?{" "}
                          <Link to={"/"} className="login-link">
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
          <OtpVerify
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
