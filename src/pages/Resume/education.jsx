import React from "react";
import cx from "classnames";
import { education } from "./constants";
import s from "./style.module.scss";

const Education = (props) => {
  return (
    <div className={cx(s.sectionWrapper, s.workExWrapper)}>
      <div className={s.left}>Education</div>
      <div className={s.right}>
        {education.map((item, index) => (
          <div key={index} className={s.institutionWrapper}>
            <div className={s.institutionInfo}>
              {item.institution} | {item.degree}
            </div>
            <div className={s.toFrom}>
              {item.from} - {item.to}
            </div>
            <div>
              {item?.achievements?.map((achievement, indx) => (
                <div key={indx} className={s.achievementDesc}>{achievement}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
