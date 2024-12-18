import { useState } from "react";
import { Row, Col, Form as BsForm, Accordion } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";
import { MyCustomModal } from "@components/core/MyCustomModal/MyCustomModal";
import TwoFA from "@components/TwoFA/TwoFA";
import ReactSelect, { StylesConfig } from "react-select";
import { TReactSelectOption } from "src/models";
import { customStyles } from "src/customStyles";
import CustomField from "@components/core/Input/CustomFieldProps";
import "./CreateAccount.css";
import Confirmation from "@components/Confirmation/Confirmation";
import { FusionLogo } from "@assets/images";
import CustomButton from "@components/core/CustomButton/CustomEditButton";

interface CreateAccountFormValues {
  username: string;
  mobile: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  country: string;
  city: string;
  province: string;
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
}


const CreateAccount = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [confirmModalShow, setConfirmModalShow] = useState<boolean>(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const initialValues = {
    username: "",
    mobile: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    country: "",
    city: "",
    province: "",
    zipCode: "",
    addressLine1: "",
    addressLine2: ""
  };

  const handleSubmit = (data: CreateAccountFormValues) => {
    console.log("Form Data:", data);
    setModalShow(true);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    mobile: Yup.string()
      .required("Please enter a mobile number")
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter an email"),
    firstName: Yup.string().required("Please enter your first name"),
    middleName: Yup.string().required("Please enter your Middle Name"),
    lastName: Yup.string().required("Please enter your last name"),
    country: Yup.string().required("Please select a country"),
    city: Yup.string().required("Please enter your city"),
    province: Yup.string().required("Please enter your province"),
    zipCode: Yup.string()
      .required("Please enter a zip code")
      .matches(/^\d{5}$/, "Zip code must be exactly 5 digits"),
    addressLine1: Yup.string().required("Please enter address line 1"),
    addressLine2: Yup.string().required("Please enter address line 2"),
    // .matches(/^\d{3}-\d{2}-\d{4}$/, 'SSN must be in the format XXX-XX-XXXX'),
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
                  {({ touched, setFieldValue, errors, handleSubmit, isValid, dirty }) => (
                    <Form>
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0" className="mb-4">
                          <Accordion.Header className="custom-header">
                            Profile & Contact Details
                          </Accordion.Header>
                          <Accordion.Body>
                            <CustomField
                              type="text"
                              name="username"
                              label="User Name"
                              placeholder="Jonh Doe"
                              touched={touched}
                              errors={errors}
                              fieldTextSize="fieldTextSize"
                            />
                            <div className="row">
                              <CustomField
                                type="text"
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
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header className="custom-header">
                            Personal & Address Details
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="row">
                              <CustomField
                                type="text"
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                                className="col-md-4"
                                touched={touched}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                              />
                              <CustomField
                                type="text"
                                name="middleName"
                                label="Middle Name"
                                placeholder="Middle Name"
                                className="col-md-4"
                                touched={touched}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                              />
                              <CustomField
                                type="text"
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                                className="col-md-4"
                                touched={touched}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                              />
                            </div>
                            <div className="row">
                              <CustomField
                                type="text"
                                name="country"
                                label="Country"
                                placeholder="Country"
                                className="col-md-6"
                                touched={touched}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                              />

                              <div className="col-md-6 mb-3">
                                <label htmlFor="city">City</label>
                                <ReactSelect
                                  className={`form-control ${touched.city && errors.city
                                      ? "is-invalid"
                                      : ""
                                    } dropdown-field-text`}
                                  inputId="city"
                                  // value={}
                                  onChange={(e) => {
                                    setFieldValue("city", e?.value);
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
                                {touched.city && errors.city && (
                                  <BsForm.Control.Feedback type="invalid">
                                    {errors.city}
                                  </BsForm.Control.Feedback>
                                )}
                              </div>
                            </div>

                            <div className="row">
                              <CustomField
                                type="text"
                                name="province"
                                label="State"
                                placeholder="State"
                                className="col-md-6"
                                touched={touched}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                              />
                              <CustomField
                                type="text"
                                name="zipCode"
                                label="Zip Code"
                                placeholder="Zip Code"
                                className="col-md-6"
                                touched={touched}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                              />
                            </div>
                            <CustomField
                              type="text"
                              name="addressLine1"
                              label="Address Line 1"
                              placeholder="Address Line 1"
                              touched={touched}
                              errors={errors}
                              fieldTextSize="fieldTextSize"
                            />
                            <CustomField
                              type="text"
                              name="addressLine2"
                              label="Address Line 2"
                              placeholder="Address Line 2"
                              touched={touched}
                              errors={errors}
                              fieldTextSize="fieldTextSize"
                            />
                            {/* Submit Button */}
                            <div className="d-flex justify-content-center">
                              <div className="d-grid col-md-5 my-2">
                                <CustomButton
                                  onSelect={isValid && dirty ? () => { } : handleSubmit}
                                  title="Verify"
                                  containFill={true}
                                  buttonDisabled={!isValid || !dirty} // Disable button if form is invalid or not modified
                                />

                                {/* <button type="submit" className="btn btn-primary">
                            Verify
                          </button> */}
                              </div>
                            </div>

                            {/* Signup Link */}
                            <div className="d-flex justify-content-center align-items-center signupLinkText mb-0 mt-2">
                              <span>
                                Already have an account?{" "}
                                <Link to={"/"} className="login-link">
                                  Login
                                </Link>
                              </span>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
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
              // navigate(ROUTES.DASHBOARD);
              setConfirmModalShow(true);
            }}
          />
        </MyCustomModal>
        <MyCustomModal
          show={confirmModalShow}
          onHide={() => setConfirmModalShow(false)}
        >
          <Confirmation
            onSuccess={() => navigate(ROUTES.DASHBOARD)}
            onHide={() => setConfirmModalShow(false)}
          />
        </MyCustomModal>
      </div>
    </div>
  );
};

export default CreateAccount;
