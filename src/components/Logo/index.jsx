import React from "react";
import LogoCircle from "assets/svg/logoCircle.jsx";
import { NAME_CAMEL, DESIGNATION } from "common/constants";
import s from "./style.module.scss";

const Logo = () => {
  return (
    <div className={s.logo}>
      <div className={s.logoWrapper}>
        <LogoCircle logoClassName={s.logoCircle} height="25" width="25" />
      </div>
      <div className={s.name}>{NAME_CAMEL}</div>
      <div className={s.designation}>{DESIGNATION}</div>
    </div>
  );
};

export default Logo;
