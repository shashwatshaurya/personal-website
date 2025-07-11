import React, { memo } from "react";
import cx from "classnames";
import { workEx } from "./constants";
import s from "./style.module.scss";

const WorkEx = () => {

  // Function to parse text with **highlight** syntax and return JSX elements
  const parseHighlightedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const highlightedText = part.slice(2, -2);
        return <span key={index} className={s.mark}>{highlightedText}</span>;
      }
      return part;
    });
  };

  return (
    <div className={cx(s.sectionWrapper, s.workExWrapper)}>
      <div className={s.left}>Work Experience</div>
      <div className={s.right}>
        <ul>
          {workEx.map((item, index) => (
            <li key={index} className={s.companyWrapper}>
              <div className={s.companyIntro}>
                {item.company} | {item.position}
              </div>
              <div className={s.toFrom}>
                {item.from} - {item.to}
              </div>
              <ul>
                {item?.work?.map((workItem, ind) => (
                  <li key={ind + workItem.substring(0, 3)} className={s.workDesc}>
                    {parseHighlightedText(workItem)}
                  </li>
                ))}
              </ul>
              <div className={s.techStack}>TechStack - [{item.stack}]</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(WorkEx);
