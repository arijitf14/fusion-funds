import { Formik, Field, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { Clock, Close } from "@assets/svg";
import "./TwoFA.css";
import "./Otpverify.css"
import CustomButton from "@components/core/CustomButton/CustomEditButton";
import useTimerProps from "@customHooks/useTimerProps";
import { toast } from "react-toastify";
interface TwoFAProps {
  onHide: () => void;
  onSuccess: () => void;
}

const OtpVerify: React.FC<TwoFAProps> = ({ onHide, onSuccess }) => {

  const { timer, isButtonDisabled, resetTimer } = useTimerProps({
    initialTime: 30,
  });

  const initialValues = {
    code: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string()
      .matches(/^\d{6}$/, "Code must be exactly 6 digits")
      .required("Verification code is required"),
  });

  const handleSubmit = (values: { code: string },
    { setSubmitting }: FormikHelpers<{ code: string }>
  ) => {
    setSubmitting(false);
    onHide();
    onSuccess();
  };
  const resendOtp = () => {
    toast.success("An OTP has been sent to your registered Email/Mobile", { theme: "colored" });
    resetTimer();
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between titleContainer">
        <div>
          <h1 className="otpTitle mb-0">OTP Verification</h1>
        </div>
        <div onClick={onHide} className="d-flex align-items-center titleCloseIcon">
          <Close />
        </div>
      </div>
      <div className="mb-2">
        <span className="twoText">
          A verification code will be sent to your registered email ID and mobile
          number
        </span>
      </div>

      {/* <p>Get Verification Code</p> */}
      <Form.Group className="mb-3">
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, touched, errors, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                  <label className="mb-1">
                    Enter 6 digit verification code
                  </label>
                  <Field
                    type="text"
                    id="code"
                    name="code"
                    autoComplete="off"
                    className={`form-control ${touched.code && errors.code ? "is-invalid" : ""
                      }`}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const { value } = e.target;
                      if (value.length <= 6) {
                        setFieldValue("code", value);
                      }
                    }}
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
                    <span className="timerText">
                      Time left: {Math.floor(timer / 60)} mins {timer % 60} secs
                    </span>
                  </div>

                  <CustomButton
                    onSelect={resendOtp}
                    title="Resend Code"
                    containFill={true}
                    buttonDisabled={isButtonDisabled}
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <div className="d-grid col-md-5 mt-3">
                    <CustomButton
                      onSelect={() => { }}
                      title=" Confirm"
                      containFill={true}
                      buttonDisabled={values?.code?.length !== 6}
                    />
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
