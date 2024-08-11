import React from "react";
import cx from "classnames";
import Button from "../../components/Button";
import s from "./style.module.scss";

const Download = (props) => {
  const handleDownload = () => {
    console.log('download clicked');
    // TODO: Download logic
  };

  return (
    <div className={cx(s.sectionWrapper, s.downloadBtnWrapper)}>
      <Button onClick={handleDownload} buttonClass={s.downloadBtn} normal>
        Download
      </Button>
    </div>
  );
};

export default Download;
