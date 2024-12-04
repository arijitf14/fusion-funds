import { Formik, Field, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { useState } from "react";
import { Clock, Close } from "@assets/svg";
import "./TwoFA.css"
interface TwoFAProps {
    onHide: () => void; // Function to close the modal
    onSuccess: () => void; // Function to handle success
}

const OtpVerify: React.FC<TwoFAProps> = ({ onHide, onSuccess }) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState<string>("");

    const initialValues = {
        code: "",
    };

    const validationSchema = Yup.object().shape({
        code: Yup.string()
            .length(6, "Code must be exactly 6 digits")
            .required("Verification code is required"),
    });

    const handleSubmit = (
        values: { code: string },
        { setSubmitting }: FormikHelpers<{ code: string }>
    ) => {
        setSubmitting(false);
        onHide();
        onSuccess();
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h1 className="mb-0">OTP Verification</h1>
                </div>
                <div onClick={onHide} className="d-flex align-items-center">
                    <Close />
                </div>
            </div>
            <p>
                A verification code will be sent to your registered email ID and mobile
                number
            </p>

            {/* <p>Get Verification Code</p> */}

            <Form.Group className="mb-3">
                <div>
                    {/* <Form.Check
            inline
            label="SMS"
            type="radio"
            id="sms"
            name="selectedCheckbox"
            value="sms"
            checked={selectedCheckbox === "sms"}
            onChange={() => setSelectedCheckbox("sms")}
          />
          <Form.Check
            inline
            label="Email"
            type="radio"
            id="email"
            name="selectedCheckbox"
            value="email"
            checked={selectedCheckbox === "email"}
            onChange={() => setSelectedCheckbox("email")}
          /> */}


                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, touched, errors, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group my-3">
                                    <label className="mb-2">
                                        Enter 6 digit verification code
                                    </label>
                                    <Field
                                        type="text"
                                        id="code"
                                        name="code"
                                        className={`form-control ${touched.code && errors.code ? "is-invalid" : ""
                                            }`}
                                    />
                                    {touched.code && errors.code && (
                                        <div className="invalid-feedback">{errors.code}</div>
                                    )}
                                </div>

                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <div className="mx-2">
                                            <Clock />
                                        </div>
                                        <span>Time left: 3 mins 00 secs</span>
                                    </div>

                                    <span className="">
                                        Resend Code
                                    </span>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <div className="d-grid col-md-6">
                                        <button
                                            type="submit"
                                            disabled={!values.code}
                                            className="btn custom-button-disabled"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>

                            </form>
                        )}
                    </Formik>
                </div>
            </Form.Group>
        </>
    );
};

export default OtpVerify;
