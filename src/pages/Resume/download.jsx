import React from "react";
import cx from "classnames";
import Button from "components/Button";
import s from "./style.module.scss";

const Download = (props) => {
  const handleDownload = () => {
    console.log('download clicked');
    // TODO: Download logic
    const anchorElement = document.createElement('a');
    anchorElement.href = './pdf/Resume.pdf'
    anchorElement.download = 'Shashwat_Shaurya_Resume.pdf'
    anchorElement.click();
    anchorElement.remove();
  };

  return (
    <div className={cx(s.sectionWrapper, s.downloadBtnWrapper)}>
      <Button data-umami-event="download-resume" onClick={handleDownload} buttonClass={s.downloadBtn} normal>
        Download
      </Button>
    </div>
  );
};

export default Download;
