import React from "react";
import cx from "classnames";
import s from "./style.module.scss";

const TextArea = (props) => {
  const { propClass, placeholder, onChange, name, value, required } = props;
  return (
    <textarea
      className={cx(s.textArea, propClass)}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      required={required}
    />
  );
};

TextArea.defaultProps = {
  propClass: "",
  placeholder: "I am A textarea",
  onChange: () => { },
};

export default TextArea;
