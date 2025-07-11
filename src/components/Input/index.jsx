import React from "react";
import cx from "classnames";
import s from "./style.module.scss";

const Input = (props) => {
  const { onChange, type, placeholder, inputClass, autoComplete, name, value, required } = props;
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={cx(s.inputNative, inputClass)}
      autoComplete={autoComplete}
      name={name}
      value={value}
      required={required}
    />
  );
};

export default Input;
