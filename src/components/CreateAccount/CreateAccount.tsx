import { useState } from "react";
import { Row, Col, Form as BsForm, Accordion } from "react-bootstrap";
import { Formik, Form } from "formik";
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
import { FusionLogo } from "@assets/images";
import CustomButton from "@components/core/CustomButton/CustomEditButton";
import { useDispatch, useSelector } from "react-redux";
import { showNotifyModal } from "@redux/signUpConfirmation";
import { AuthState, save } from "@redux/auth";
import { RootState } from "@redux/store";
import MobileField from "@components/core/Input/MobileField";

interface CreateAccountFormValues {
  userName: string;
  mobile: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
}

const CreateAccount = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const signUpValues = useSelector((state: RootState) => state.authDetails);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "usa", label: "USA" },
  ];

  const initialValues = {
    userName: "",
    mobile: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    addressLine1: "",
    addressLine2: "",
  };

  const populatedValues = Object.assign({}, initialValues, {
    mobile: signUpValues.mobile,
    userName: signUpValues.userName,
    email: signUpValues.email,
  });

  const handleSubmit = (data: CreateAccountFormValues) => {
    console.log("Form Data=======================>:", data);
    setModalShow(true);
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Please enter a User Name"),
    mobile: Yup.string()
      .required("Please enter a mobile number")
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter an email"),
    firstName: Yup.string().required("Please enter your first name"),
    middleName: Yup.string(),
    lastName: Yup.string().required("Please enter your last name"),
    country: Yup.string().required("Please select a country"),
    city: Yup.string().required("Please enter your city"),
    state: Yup.string().required("Please enter your province"),
    zipCode: Yup.string()
      .required("Please enter a zip code")
      .matches(/^\d{5}$/, "Zip code must be exactly 5 digits"),
    addressLine1: Yup.string().required("Please enter address line 1"),
    addressLine2: Yup.string().required("Please enter address line 2"),
    // .matches(/^\d{3}-\d{2}-\d{4}$/, 'SSN must be in the format XXX-XX-XXXX'),
  });
  const twoFaFunc = (values: CreateAccountFormValues) => {
    navigate(ROUTES.DASHBOARD);
    const authData: AuthState = {
      accessToken: "fusionFund",
      accessTokenExpiry: 3600,
      refreshToken: "refresh-fusionFund",
      refreshTokenExpiry: 12000,
      name: values.firstName,
      merchantID: "Rich1234",
      twoFaPref: "mobile",
    };
    dispatch(save(authData));
    dispatch(showNotifyModal(true));
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <Formik
        initialValues={populatedValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          touched,
          setFieldValue,
          errors,
          handleSubmit,
          isValid,
          values,
          dirty,
        }) => (
          <div className="rounded-lg p-4 p-md-5 w-100 w-md-50">
            <Row className="w-100 h-100 ms-0">
              {/* Left Side: Image */}
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center align-items-center flex-column flex-md-row"
              >
                <img
                  src={FusionLogo}
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
                  <div className="signup-form">
                    <h2 className="text-start text-lg font-semibold mb-3">
                      Sign Up
                    </h2>

                    <Form>
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0" className="mb-4">
                          <Accordion.Header className="custom-header">
                            Profile & Contact Details
                          </Accordion.Header>
                          <Accordion.Body>
                            <CustomField
                              type="text"
                              name="userName"
                              label="User Name"
                              placeholder="Jonh Doe"
                              touched={touched}
                              disabled={true}
                              errors={errors}
                              fieldTextSize="fieldTextSize"
                            />
                            <div className="row">
                              <MobileField
                                type="text"
                                name="mobile"
                                label="Mobile Number"
                                placeholder="Enter your mobile no"
                                className="col-md-6"
                                touched={touched}
                                disabled={true}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                              />
                              <CustomField
                                type="email"
                                name="email"
                                label="Email"
                                disabled={true}
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
                              <div className="col-md-6 mb-3">
                                <label htmlFor="city">Country</label>
                                <ReactSelect
                                  className={`form-control ${
                                    touched.country && errors.country
                                      ? "is-invalid"
                                      : ""
                                  } dropdown-field-text`}
                                  inputId="country"
                                  value={
                                    options.find(
                                      (option) =>
                                        option.value === values.country
                                    ) || null
                                  }
                                  onChange={(e) => {
                                    setFieldValue("country", e?.value);
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
                                {touched.country && errors.country && (
                                  <BsForm.Control.Feedback
                                    className="dropdown-field-text"
                                    type="invalid"
                                  >
                                    {errors.country}
                                  </BsForm.Control.Feedback>
                                )}
                              </div>

                              <div className="col-md-6 mb-3">
                                <label htmlFor="city">City</label>
                                <ReactSelect
                                  className={`form-control ${
                                    touched.city && errors.city
                                      ? "is-invalid"
                                      : ""
                                  } dropdown-field-text`}
                                  inputId="city"
                                  value={
                                    options.find(
                                      (option) => option.value === values.city
                                    ) || null
                                  }
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
                                  <BsForm.Control.Feedback
                                    className="dropdown-field-text"
                                    type="invalid"
                                  >
                                    {errors.city}
                                  </BsForm.Control.Feedback>
                                )}
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-3">
                                <label htmlFor="city">State</label>
                                <ReactSelect
                                  className={`form-control ${
                                    touched.state && errors.state
                                      ? "is-invalid"
                                      : ""
                                  } dropdown-field-text`}
                                  inputId="state"
                                  value={
                                    options.find(
                                      (option) => option.value === values.state
                                    ) || null
                                  }
                                  onChange={(e) => {
                                    setFieldValue("state", e?.value);
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
                                {touched.state && errors.state && (
                                  <BsForm.Control.Feedback
                                    className="dropdown-field-text"
                                    type="invalid"
                                  >
                                    {errors.state}
                                  </BsForm.Control.Feedback>
                                )}
                              </div>
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
                                  onSelect={
                                    isValid && dirty ? () => {} : handleSubmit
                                  }
                                  title="Verify"
                                  containFill={true}
                                  buttonDisabled={!isValid || !dirty}
                                />
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
                  </div>
                </div>
              </Col>
            </Row>
            <MyCustomModal show={modalShow} onHide={() => setModalShow(false)}>
              <TwoFA
                onHide={() => setModalShow(false)}
                onSuccess={() => twoFaFunc(values)}
              />
            </MyCustomModal>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateAccount;
