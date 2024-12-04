import CustomField from '@components/core/Input/CustomFieldProps'
import { Formik, Field, Form } from "formik";
import { Row, Col, Form as BsForm, Accordion } from "react-bootstrap";
import * as Yup from "yup";
import ReactSelect, { StylesConfig } from "react-select";
import { customStyles } from "src/customStyles";
import { TReactSelectOption } from 'src/models';
import "./EditProfile.css"

// interface UserProfile {
//     firstName: string;
//     middleName: string;
//     lastName: string;
//     country: string;
//     city: string;
//     state: string;
//     zipCode: string;
//     addressLine1: string;
//     addressLine2: string
// }

// interface EditProfileProps {
//     profileData: UserProfile
// }

const EditProfile = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    // const {profileData} = props

    // const editMode = true
    const initialValues = {
        firstName: "",
        middleName: "",
        lastName: "",
        country: "",
        city: "",
        state: "",
        zipCode: "",
        addressLine1: "",
        addressLine2: ""
    };

    // const newInitialValues = Object.assign(initialValues, {
    //     firstName: editMode ? "Arijit" : ""
    // })

    const handleSubmit = (data: any) => {
        console.log("Form Data:", data);
        // setModalShow(true);
    };

    const validationSchema = Yup.object().shape({
       
        firstName: Yup.string().required("Please enter your first name"),
        middleName: Yup.string().required("Please enter your Middle Name"),
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
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({ touched, setFieldValue, errors, resetForm }) => (
                        <Form className='p-0'>
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
                                <label htmlFor="country" className="field-class">Country</label>
                                <ReactSelect
                                    className={`form-control ${touched.country && errors.country
                                        ? "is-invalid"
                                        : ""
                                        } dropdown-field-text`}
                                    inputId="country"
                                    // value={}
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
                                    <BsForm.Control.Feedback className='dropdown-field-text' type="invalid">
                                        {errors.country}
                                    </BsForm.Control.Feedback>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="field-class">City</label>
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
                                    <BsForm.Control.Feedback className='dropdown-field-text' type="invalid">
                                        {errors.city}
                                    </BsForm.Control.Feedback>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="state" className="field-class">State</label>
                                <ReactSelect
                                    className={`form-control ${touched.state && errors.state
                                        ? "is-invalid"
                                        : ""
                                        } dropdown-field-text`}
                                    inputId="state"
                                    // value={}
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
                                    <BsForm.Control.Feedback className='dropdown-field-text' type="invalid">
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
                                    <button type='submit' 
                                     onClick={() => {
                                        resetForm(); // Reset the entire form to `initialValues`
                                        // Preserve specific field values
                                        setFieldValue("city", "");
                                        setFieldValue("state", "");
                                        setFieldValue("country", "");
                                    }}
                                    className="custom-btn-outline">
                                        Reset
                                    </button>
                                </div>
                                <div className="d-grid col-md-1 mb-2 mx-5">
                                    <button type="submit" className="custom-btn-filled">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </Row>
        </div>
    )
}

export default EditProfile
