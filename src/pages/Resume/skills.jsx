import React from "react";
import cx from "classnames";
import { skills } from "./constants";
import s from "./style.module.scss";

const Skills = (props) => {
  return (
    <div className={cx(s.sectionWrapper, s.workExWrapper)}>
      <div className={s.left}>Skills</div>
      <div className={s.right}>
        {skills?.map((item, indx) => (
          <div key={indx} className={s.skillItem}>
            <div className={s.skillType}>{item.type}</div>
            <div className={s.skillList}>{item.list}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
