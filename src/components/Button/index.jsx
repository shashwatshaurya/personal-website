import React from "react";
import cx from "classnames";
import s from "./style.module.scss";

const Button = (props) => {
  const { type, children, buttonClass, normal, large, small, onClick } = props;
  const combinedClass = [
    s.btn,
    normal ? s.normal : "",
    large ? s.large : "",
    small ? s.small : "",
  ];
  switch (type) {
    case "email": {
      return (
        <button type="submit" className={cx(...combinedClass, buttonClass)}>
          {children}
        </button>
      );
    }
    default: {
      return (
        <button onClick={onClick} className={cx(s.btn, buttonClass)}>
          {children}
        </button>
      );
    }
  }
};

export default Button;
