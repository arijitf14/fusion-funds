import { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
    menu: (provided) => ({
      ...provided,
      width: "calc(100% + 2px)",
      padding: 0,
      marginTop: "5px",
      marginBottom: "0px",
      left: "-1px",
      borderRadius: "10px",
      border: "none",
      boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.12)",
      overflow: "hidden",
      zIndex: 3,
    }),
    container: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled ? "#F5F5F5" : "white",
      borderColor: state.isDisabled ? "#cfcfcf" : "#BBB6B6",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
  
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
    option: (provided, state) => {
      return {
        ...provided,
        borderTop: "1px solid #E1E1E1",
        // eslint-disable-next-line no-nested-ternary
        color: state.isDisabled
          ? "#ccc"
          : state.isSelected
          ? "#292D32"
          : "#7f8184",
        // eslint-disable-next-line no-nested-ternary
        background: state.isDisabled
          ? "#f2f2f2"
          : state.isSelected
          ? "#fffbeb"
          : "#fff",
        padding: "12px 16px",
        position: "relative",
        cursor: state.isDisabled || state.isSelected ? "default" : "pointer",
        transition: "all 0.25s ease-in-out",
        pointerEvents: state.isSelected || state.isDisabled ? "none" : "auto",
  
        /* ":before": {
          content: '""',
          background: state.isSelected ? "" : "#E1E1E1",
          width: "100%",
          height: "1px",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1,
        }, */
        /* "+div": {
          ":before": {
            display: state.isSelected ? "none" : "",
          },
        }, */
        ":hover": {
          // eslint-disable-next-line no-nested-ternary
          background: state.isDisabled
            ? "#f2f2f2"
            : state.isSelected
            ? "#F5F5F5"
            : "#E1E1E1",
          ":before": {
            zIndex: 1,
          },
        },
        ":first-child": {
          borderTop: "none",
          /* ":before": {
            display: "none",
          }, */
        },
      };
    },
    control: (styles, state) => ({
      ...styles,
      backgroundColor: state.isDisabled ? "#F5F5F5" : "white",
      border: "none",
      width: "100%",
      padding: 0,
      minHeight: 20,
      boxShadow: "none",
  
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        boxShadow: "none",
      },
    }),
    placeholder: (styles, state) => {
      return {
        ...styles,
        color: state.isDisabled ? "#9D9D9D" : "#7D7D7D",
        fontWeight: 500,
      };
    },
    input: (provided) => ({
      ...provided,
      margin: "0px",
      padding: 0,
      color: "#292D32",
      fontWeight: 500,
      minWidth: 0,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "auto",
      padding: 0,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      height: "auto",
      padding: 0,
      color: state.isDisabled ? "#9D9D9D" : "#292D32",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#292D32",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
      fontWeight: 500,
    }),
    multiValueLabel: (base) => ({
      ...base,
      lineHeight: "1.4",
    }),
    multiValueRemove: (base) => ({
      ...base,
      flexShrink: 0,
      transition: "all 0.25s ease-in-out",
      ":hover": {
        backgroundColor: "#cf1d1d",
        color: "#fff",
      },
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };