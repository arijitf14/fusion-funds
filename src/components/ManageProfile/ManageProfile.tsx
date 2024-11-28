import LayoutHOC from "@components/core/CommonLayout";
import CustomField from "@components/core/Input/CustomFieldProps";
import { Formik, Form } from "formik";
import { Form as BsForm } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect, { StylesConfig } from "react-select";
import { customStyles } from "src/customStyles";
import { TReactSelectOption } from "src/models";
import * as Yup from "yup";
import "./ManageProfile.css";
import ContactIcon from "@assets/customSvg/Contact";
import AccountIcon from "@assets/customSvg/Account";
import { useState } from "react";

const ManageProfile = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Contact");

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
    addressLine2: "",
  };

  const handleSubmit = (data: any) => {
    console.log("Form Data:", data);
    // setModalShow(true);
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
    addressLine2: Yup.string().required("Please enter address line 1"),
    // .matches(/^\d{3}-\d{2}-\d{4}$/, 'SSN must be in the format XXX-XX-XXXX'),
  });
  return (
    <div className="my-4">
      <div className="my-4">
        <h3>Manage Profile</h3>
        <div className="d-flex gap-3">
          {/* Contact Details */}
          <div
            className={`d-flex gap-1 align-items-center ${
              selectedTab === "Contact"
                ? "custom-btn-filled"
                : "custom-btn-outline"
            }`}
            onClick={() => setSelectedTab("Contact")}
          >
            <ContactIcon
              color={selectedTab === "Contact" ? "white" : "#1C2971"}
            />
            {/* Replace with correct icon */}
            Contact Details
          </div>

          {/* Account Settings */}
          <div
            className={`d-flex gap-1 align-items-center ${
              selectedTab === "Account"
                ? "custom-btn-filled"
                : "custom-btn-outline"
            }`}
            onClick={() => setSelectedTab("Account")}
          >
            <AccountIcon
              color={selectedTab === "Account" ? "white" : "#1C2971"}
            />
            {/* Replace with correct icon */}
            Account Settings
          </div>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, setFieldValue, errors }) => (
          <Form>
            <div className="row">
              <CustomField
                type="text"
                name="mobile"
                label="Mobile Number"
                placeholder="Mobile Number"
                className="col-md-6"
                touched={touched}
                errors={errors}
              />
              <CustomField
                type="email"
                name="email"
                label="Email"
                placeholder="example@gmail.com"
                className="col-md-6"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="row">
              <CustomField
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                className="col-md-4"
                touched={touched}
                errors={errors}
              />
              <CustomField
                type="text"
                name="middleName"
                label="Middle Name"
                placeholder="Middle Name"
                className="col-md-4"
                touched={touched}
                errors={errors}
              />
              <CustomField
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                className="col-md-4"
                touched={touched}
                errors={errors}
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
              />

              <div className="col-md-6 mb-3">
                <label htmlFor="city">City</label>
                <ReactSelect
                  className={`form-control ${
                    touched.city && errors.city ? "is-invalid" : ""
                  }`}
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
                    customStyles as StylesConfig<TReactSelectOption, false>
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
              />
              <CustomField
                type="text"
                name="zipCode"
                label="Zip Code"
                placeholder="Zip Code"
                className="col-md-6"
                touched={touched}
                errors={errors}
              />
            </div>
            <CustomField
              type="text"
              name="addressLine1"
              label="Address Line 1"
              placeholder="Address Line 1"
              touched={touched}
              errors={errors}
            />
            <CustomField
              type="text"
              name="addressLine2"
              label="Address Line 2"
              placeholder="Address Line 2"
              touched={touched}
              errors={errors}
            />
            {/* Submit Button */}
            <div className="d-flex gap-2 justify-content-start">
              <div className="d-grid col-md-1 mb-2">
                <button type="submit" className="btn-secondary">
                  Edit
                </button>
              </div>
              <div className="d-grid col-md-1 mb-2">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LayoutHOC(ManageProfile);
