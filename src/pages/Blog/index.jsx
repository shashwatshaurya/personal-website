import React from "react";
import GenereSection from "./genereSection";
import { GENRES } from "./constants";
import s from "./style.module.scss";

const Blog = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.headerText}>Blog Page</div>
      <div className={s.generesWrapper}>
        {Object.keys(GENRES).map((genere, index) => (
          <GenereSection
            key={index}
            genere={genere}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
