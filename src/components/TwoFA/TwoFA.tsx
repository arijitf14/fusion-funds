import { Formik, Field, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Clock, Close } from "@assets/svg";
import CustomButton from "@components/core/CustomButton/CustomEditButton";

interface TwoFAProps {
  onHide: () => void;
  onSuccess: () => void;
}

const TwoFA: React.FC<TwoFAProps> = ({ onHide, onSuccess }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string>("");

  const [timer, setTimer] = useState(180);
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

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
  };

  useEffect(() => {
    if (selectedCheckbox !== "") {
      setTimer(180);
      setButtonDisabled(true);
    }
  }, [selectedCheckbox]);

  useEffect(() => {
    if (timer > 0 && isButtonDisabled) {
      const interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setButtonDisabled(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isButtonDisabled]);

  const resetTimer = () => {
    setTimer(180);
    setButtonDisabled(true);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between titleContainer">
        <div>
          <span className="twoFaTitle mb-0">2 Factor Authentication</span>
        </div>
        <div onClick={onHide} className="d-flex align-items-center titleCloseIcon">
          <Close />
        </div>
      </div>
      <div className="mb-2">
        <span className="twoText">
          A verification code will be sent to below options as per your preference
        </span>
      </div>
      <div className="mb-1">
        <span className="twoLebalText">Get Verification Code</span>
      </div>

      <Form.Group className="mb-3">
        <div>
          <Form.Check
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
          />

          {selectedCheckbox !== "" && (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, values, errors, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group my-3">
                    <label className="mb-1">
                      Enter 6 digit verification code
                    </label>
                    <Field
                      type="text"
                      id="code"
                      name="code"
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
                      onSelect={resetTimer}
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
        </div>
      </Form.Group>
    </>
  );
};

export default TwoFA;
