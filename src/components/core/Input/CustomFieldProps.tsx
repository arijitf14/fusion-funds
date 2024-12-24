import React, { useState } from "react";
import { Field, FieldProps } from "formik";
import { Form as BsForm } from "react-bootstrap";
import { EyeClose, EyeOpen } from "@assets/svg";
import "./CustomFieldProps.css";

interface CustomFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  touched: any; // Formik touched object
  errors: any; // Formik errors object
  fieldTextSize?: string;
  doNotCopyPaste?: boolean;
  disabled?: boolean;
}

const CustomField: React.FC<CustomFieldProps> = ({
  type,
  name,
  label,
  placeholder,
  className = "",
  touched,
  errors,
  fieldTextSize = "",
  doNotCopyPaste = false,
  disabled=false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Check if there's an error and the field has been touched
  const isInvalid = touched[name] && errors[name];

  const handleCopyPaste = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className={`form-group mb-3 ${className}`}
      style={{ position: "relative" }}
    >
      {/* Label */}
      <label htmlFor={name}>{label}</label>

      {/* Field Input */}
      <div className="customFieldPropsClass no-select">
        <Field name={name}>
          {({ field }: FieldProps) => (
            <>
              <input
                {...field}
                type={isPasswordField && showPassword ? "text" : type}
                id={name}
                disabled={disabled}
                onPaste={doNotCopyPaste ? handleCopyPaste : () => {}}
                onCopy={doNotCopyPaste ? handleCopyPaste : () => {}}
                onCut={doNotCopyPaste ? handleCopyPaste : () => {}}
                placeholder={placeholder}
                style={{ fontSize: "12px" }}
                // className={`form-control ${isInvalid ? "is-invalid" : ""} ${fieldTextSize}`}
                className={`form-control no_select ${
                  isInvalid && !isPasswordField ? "is-invalid" : ""
                } ${fieldTextSize}`}
              />
              {/* Eye Icon for Password Fields */}
              {isPasswordField && (
                <button
                  className="passwordInputField"
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOpen
                      className="testIcon"
                      style={{ width: "22px", height: "23px" }}
                    />
                  ) : (
                    <EyeClose className="testIcon" />
                  )}
                </button>
              )}
            </>
          )}
        </Field>

        {/* Error Message */}
        {isInvalid && (
          <BsForm.Control.Feedback type="invalid" style={{ display: "block" }}>
            {errors[name]}
          </BsForm.Control.Feedback>
        )}
      </div>
    </div>
  );
};

export default CustomField;
