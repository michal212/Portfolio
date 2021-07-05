import React from "react";
import TextField from "@material-ui/core/TextField";
import "../../index.css";

export default function Input(props) {
  const {
    placeholder,
    inputType,
    inputName,
    inputValue,
    inputOnChange,
    error,
    myref
  } = props;

  return (
    <div className="inputItem">
      <TextField
      ref={myref}
        error={error}
        onChange={inputOnChange}
        id="outlined-basic"
        label={placeholder}
        name={inputName}
        value={inputValue}
        variant="outlined"
        type={inputType}
        style={{ width: "300px", background: "#FAFAFA", marginBottom: "30px" }}
      />
    </div>
  );
}
