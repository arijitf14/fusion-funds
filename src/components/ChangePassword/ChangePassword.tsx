import { Close } from "@assets/svg";
import "./ChangePassword.css"
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CustomField from "@components/core/Input/CustomFieldProps";
import CustomButton from "@components/core/CustomButton/CustomEditButton";
interface ChangePassswordFormValues {
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

interface ChangePasswordProps {
    onHide: () => void;
    onSuccess: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ onHide, onSuccess }) => {

    const initialValues = {
        oldPassword: "",
        password: "",
        confirmPassword: "",
    };
    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character."
            )
            .required("Please enter the password"),
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
    const handleSubmit = (data: ChangePassswordFormValues) => {
        console.log("Change password Data:", data);
        // onHide();
    };
    return (
        <>
            <div className="d-flex align-items-center justify-content-between titleContainer">
                <div>
                    <span className="twoFaTitle mb-0">Change Password</span>
                </div>
                <div className="d-flex align-items-center titleCloseIcon">
                    <Close onClick={onHide} />
                </div>
            </div>
            <div className="mb-2">
                <span className="twoText">
                    For Change Password Please fill all Fields
                </span>
            </div>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ touched, errors, handleSubmit, isValid, dirty }) => (
                        <Form>
                            <CustomField
                                type="password"
                                name="oldPassword"
                                label="Old Password"
                                placeholder="Atleast 8 characters"
                                touched={touched}
                                errors={errors}
                                fieldTextSize="fieldTextSize"
                            />
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
                                        onSelect={isValid && dirty ? () => { } : handleSubmit}
                                        title="Confirm"
                                        containFill={true}
                                        buttonDisabled={!isValid || !dirty}
                                    />
                                </div>
                            </div>
                        </Form>

                    )}

                </Formik>
            </div>
        </>
    )
}

export default ChangePassword
