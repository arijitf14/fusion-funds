import { Formik, Field, Form } from "formik";
import { Row, Col, Form as BsForm, Button } from "react-bootstrap";
import logo from "@assets/images/FusionLogo.png";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/Utils";

const TwoFA = () => {

  const navigate = useNavigate();

  const initialValues = {
    code: "",
  };

  const handleSubmit = () => {
    navigate(ROUTES.DASHBOARD);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    password: Yup.string()
      .min(1, "Password must be at least 8 characters"),
  });

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="rounded-lg p-4 p-md-5 w-100 w-md-50">
        <Row className="h-100">
          <Col
            xs={12}
            lg={12} // Full width on large screens
            className="d-flex flex-column justify-center align-items-center h-100"
          >
            <div className="d-flex justify-content-center align-items-center mb-4">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "140px", maxWidth: "300px" }} // Adjust the logo to be responsive
              />
            </div>

            <div className="login-form mt-4">
              <h2 className="text-start text-lg font-semibold mb-2">
                2 Factor Authentication
              </h2>
              <label className="mb-4">
                A verification code will be sent to your registered email ID and
                mobile number
              </label>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, touched, errors }) => (
                  <Form>
                    <div className="form-group mb-3">
                      <label className="mb-2">
                        Enter 6 digit verification code
                      </label>
                      <Field
                        type="text"
                        id="code"
                        name="code"
                        className={`form-control ${
                          touched.code && errors.code ? "is-invalid" : ""
                        }`}
                      />
                      {touched.code && errors.code && (
                        <BsForm.Control.Feedback type="invalid">
                          {errors.code}
                        </BsForm.Control.Feedback>
                      )}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        {/* <BsClock
                          style={{ fontSize: "1.5rem", marginRight: "8px" }}
                        /> */}
                        <span>Time left: 3 mins 00 secs</span>
                      </div>

                      <button className="btn btn-primary">Resend Code</button>
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        // disabled={isSubmitting}
                      >
                        Confirm
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TwoFA;
