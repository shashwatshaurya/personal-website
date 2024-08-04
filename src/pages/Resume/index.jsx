import React from "react";
import cx from 'classnames';
import WorkEx from "./workEx";
import Education from "./education";
import Skills from "./skills";
import Download from "./download";
import s from './style.module.scss';

const Resume = () => {
  return (
    <div className={s.pageWrapper}>
      <section className={cx(s.headerSection, s.headerText, s.sectionWrapper)}>Resume</section>
      <section className={s.workExSection}><WorkEx /></section>
      <section className={cx(s.educationSection, s.borderLine)}><Education /></section>
      <section className={cx(s.skillsSection, s.borderLine)}><Skills /></section>
      <section className={cx(s.downloadResumeSection, s.borderLine)}><Download /></section>
    </div>
  );
};

export default Resume;
