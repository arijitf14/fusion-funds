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
}

const MobileField: React.FC<CustomFieldProps> = ({
  type,
  name,
  label,
  placeholder,
  className = "",
  touched,
  errors,
  fieldTextSize = "",
}) => {
  // Check if there's an error and the field has been touched
  const isInvalid = touched[name] && errors[name];

  return (
    <div
      className={`form-group mb-3 ${className}`}
      style={{ position: "relative" }}
    >
      {/* Label */}
      <label htmlFor={name}>{label}</label>

      {/* Field Input */}
      <div className="customFieldPropsClass">
        <Field name={name}>
          {({ field }: FieldProps) => (
            <div
              className={`form-control ${
                isInvalid ? "is-invalid" : ""
              } ${fieldTextSize}`}
              style={{
                height: "43.5px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="number_extention">+1</div>
              <input
                {...field}
                type={type ? type : "text"}
                id={name}
                placeholder={placeholder}
                className="unstyled-input"
              />
            </div>
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

export default MobileField;
