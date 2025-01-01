import React from "react";
import NoMobile from "assets/svg/NoMobile";
import s from "./style.module.scss";

const MobilePhoneCheck = () => {
  return (
    <div className={s.pageWrapper}>
      <NoMobile height="100" width="100" />
      <div className={s.contentWrapper}>
        <h2>Mobile View Not Supported</h2>
        <p>This website is best viewed on a desktop or laptop computer.</p>
      </div>
    </div>
  );
};

export default MobilePhoneCheck;
