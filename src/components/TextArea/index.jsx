import React from "react";
import cx from "classnames";
import s from "./style.module.scss";

const TextArea = (props) => {
  const {
    propClass = '',
    placeholder = 'I am A textarea',
    onChange = () => { },
    name,
    value,
    required,
    autoComplete = 'off' } = props;
  return (
    <textarea
      className={cx(s.textArea, propClass)}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      required={required}
      autoComplete={autoComplete}
    />
  );
};

export default TextArea;
