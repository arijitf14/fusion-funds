import { Formik, Field, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Clock, Close } from "@assets/svg";
import CustomButton from "@components/core/CustomButton/CustomEditButton";
import useTimerProps from "@customHooks/useTimerProps";
import { toast } from "react-toastify";
import "./TwoFA.css";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

interface TwoFAProps {
  onHide: () => void;
  onSuccess: () => void;
  firstTimeTriggerOtp?: boolean;
}

const TwoFA: React.FC<TwoFAProps> = ({
  onHide,
  onSuccess,
  firstTimeTriggerOtp = false,
}) => {
  const twoFaPref = useSelector((gs: RootState) => gs.authDetails.twoFaPref)
  const [selectedOption, setSelectedOption] = useState<string>(twoFaPref);
  const [showOtp, setShowOtp] = useState<boolean>(firstTimeTriggerOtp);
  const { timer, isButtonDisabled, resetTimer } = useTimerProps({
    initialTime: 30,
  });

  const sendOtp = (option: string) => {
    if (option !== twoFaPref || firstTimeTriggerOtp) {
      toast.success(`An OTP has been sent to your registered ${option}.`, { theme: "colored" });
      resetTimer();
      setShowOtp(true);
    } else {
      setShowOtp(false);
    }
    setSelectedOption(option);
  };

  const handleOptionChange = (option: string) => {
    if (option !== selectedOption) {
      sendOtp(option);
    } else if (option === twoFaPref) {
      setShowOtp(false);
    }
  };
  useEffect(() => {
    sendOtp(twoFaPref);
  }, [firstTimeTriggerOtp]);
  const resendOtp = () => {
    toast.success(`A new OTP has been sent to your registered ${selectedOption}.`, { theme: "colored" });
    resetTimer();
  };

  const initialValues = {
    code: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string()
      .matches(/^\d{6}$/, "Code must be exactly 6 digits")
      .required("Verification code is required"),
  });

  const handleSubmit = (
    values: { code: string },
    { setSubmitting }: FormikHelpers<{ code: string }>
  ) => {
    setSubmitting(false);
    onHide();
    onSuccess();
    console.log("Submitted TwoFA Code:", values.code);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between titleContainer">
        <div>
          <span className="twoFaTitle mb-0">2 Factor Authentication</span>
        </div>
        <div className="d-flex align-items-center titleCloseIcon">
          <Close onClick={onHide} />
        </div>
      </div>

      <div className="mb-2">
        <span className="twoText">
          A verification code will be sent to {firstTimeTriggerOtp ? <>your <b>{twoFaPref}</b></> : 'below options'} as per your preference
        </span>
      </div>
      {!firstTimeTriggerOtp &&
        <div className="mb-1">
          <span className="twoLebalText">Get Verification Code</span>
        </div>
      }
      <Form.Group className="mb-3">
        {!firstTimeTriggerOtp &&
          <div className="radio-group">
            <label className="radio_lable">
              <input
                type="radio"
                name="verificationOption"
                value="mobile"
                className="radio_button"
                checked={selectedOption === "mobile"}
                onChange={() => handleOptionChange("mobile")}
              />
              {"SMS"}
            </label>
            <label className="radio_lable">
              <input
                disabled={firstTimeTriggerOtp ? true : false}
                type="radio"
                name="verificationOption"
                value="email"
                className="radio_button"
                checked={selectedOption === "email"}
                onChange={() => handleOptionChange("email")}
              />
              {"Email"}
            </label>
          </div>
        }
        {showOtp && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, values, errors, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                  <label htmlFor="code" className="mb-1">
                    Enter 6 digit verification code
                  </label>
                  <Field
                    type="number"
                    id="code"
                    name="code"
                    className={`form-control ${touched.code && errors.code ? "is-invalid" : ""
                      }`}
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
                      You can resend OTP in: {Math.floor(timer / 60)} mins {timer % 60} secs
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
        )}
      </Form.Group>
    </>
  );
};

export default TwoFA;
