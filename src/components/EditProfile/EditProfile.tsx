import CustomField from "@components/core/Input/CustomFieldProps";
import { Formik, Form } from "formik";
import { Row, Form as BsForm } from "react-bootstrap";
import * as Yup from "yup";
import ReactSelect, { StylesConfig } from "react-select";
import { customStyles } from "src/customStyles";
import { TReactSelectOption } from "src/models";
import "./EditProfile.css";
import CustomButton from "@components/core/CustomButton/CustomEditButton";
import { UserData, UserProfile } from "./EditProfileTypes";

const EditProfile = ({ profileData }: UserData) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const initialValues = {
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

  const populatedValues = Object.assign({}, initialValues, profileData);
  const handleSubmit = (data: UserProfile) => {
    console.log("Form Data:", data);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    middleName: Yup.string(),
    lastName: Yup.string().required("Please enter your last name"),
    country: Yup.string().required("Please select a country"),
    city: Yup.string().required("Please enter your city"),
    state: Yup.string().required("Please enter your state"),
    zipCode: Yup.string()
      .required("Please enter a zip code")
      .matches(/^\d{5}$/, "Zip code must be exactly 5 digits"),
    addressLine1: Yup.string().required("Please enter address line 1"),
    addressLine2: Yup.string().required("Please enter address line 2"),
  });

  return (
    <div className="editProfile-container d-flex justify-content-center align-items-center">
      <Row className="w-100 h-100">
        <Formik
          initialValues={populatedValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({
            touched,
            setFieldValue,
            values,
            errors,
            resetForm,
            handleSubmit,
          }) => (
            <Form className="p-0">
              <CustomField
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                className="field-class"
                touched={touched}
                errors={errors}
                fieldTextSize="fieldTextSize"
              />
              <CustomField
                type="text"
                name="middleName"
                label="Middle Name"
                placeholder="Middle Name"
                className="field-class"
                touched={touched}
                errors={errors}
                fieldTextSize="fieldTextSize"
              />
              <CustomField
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                className="field-class"
                touched={touched}
                errors={errors}
                fieldTextSize="fieldTextSize"
              />
              <div className="mb-3">
                <label htmlFor="country" className="field-class">
                  Country
                </label>
                <ReactSelect
                  className={`form-control ${
                    touched.country && errors.country ? "is-invalid" : ""
                  } dropdown-field-text`}
                  inputId="country"
                  value={
                    options.find((option) => option.value === values.country) ||
                    null
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
                    customStyles as StylesConfig<TReactSelectOption, false>
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
              <div className="mb-3">
                <label htmlFor="city" className="field-class">
                  City
                </label>
                <ReactSelect
                  className={`form-control ${
                    touched.city && errors.city ? "is-invalid" : ""
                  } dropdown-field-text`}
                  inputId="city"
                  value={
                    options.find((option) => option.value === values.city) ||
                    null
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
                    customStyles as StylesConfig<TReactSelectOption, false>
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
              <div className="mb-3">
                <label htmlFor="state" className="field-class">
                  State
                </label>
                <ReactSelect
                  className={`form-control ${
                    touched.state && errors.state ? "is-invalid" : ""
                  } dropdown-field-text`}
                  inputId="state"
                  value={
                    options.find((option) => option.value === values.state) ||
                    null
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
                    customStyles as StylesConfig<TReactSelectOption, false>
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
                name="addressLine1"
                label="Address Line 1"
                placeholder="Address Line 1"
                className="field-class"
                touched={touched}
                errors={errors}
                fieldTextSize="fieldTextSize"
              />
              <CustomField
                type="text"
                name="addressLine2"
                label="Address Line 2"
                placeholder="Address Line 2"
                className="field-class"
                touched={touched}
                errors={errors}
                fieldTextSize="fieldTextSize"
              />
              <CustomField
                type="text"
                name="zipCode"
                label="Zip Code"
                placeholder="Zip Code"
                className="field-class"
                touched={touched}
                errors={errors}
                fieldTextSize="fieldTextSize"
              />

              <div className="d-flex gap-3 justify-content-end my-4">
                <div className="d-grid col-md-1 mb-2">
                  <CustomButton
                    onSelect={() =>
                      resetForm({
                        values: initialValues,
                      })
                    }
                    title=" Reset "
                    containFill={false}
                  />
                </div>
                <div className="d-grid col-md-1 mb-2 mx-5">
                  <CustomButton
                    onSelect={() => handleSubmit}
                    title=" Save "
                    containFill={true}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  );
};

export default EditProfile;
