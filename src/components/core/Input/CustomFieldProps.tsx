import React from "react";
import { Field } from "formik";
import { Form as BsForm } from "react-bootstrap";

interface CustomFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  touched: any; // Formik touched object
  errors: any; // Formik errors object
}

const CustomField: React.FC<CustomFieldProps> = ({
  type,
  name,
  label,
  placeholder,
  className = "",
  touched,
  errors,
}) => {
  const isInvalid = touched[name] && errors[name];

  return (
    <div className={`form-group mb-3 ${className}`}>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`form-control ${isInvalid ? "is-invalid" : ""}`}
      />
      {isInvalid && (
        <BsForm.Control.Feedback type="invalid">
          {errors[name]}
        </BsForm.Control.Feedback>
      )}
    </div>
  );
};

export default CustomField;
