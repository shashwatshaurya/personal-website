import React from "react";
import { projects } from "./constants";
import s from "./style.module.scss";

const Projects = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.projectsHeader}>Projects</div>
      <div className={s.projectsWrapper}>
        {projects.map((project, index) => (
          <div className={s.row} key={index}>
            <div className={s.left}>
              <div className={s.projectName}>{project.name}</div>
              <div className={s.projectDesc}>{project.description}</div>
              {!project.isUnderDevelopment && (
                <div className={s.projectLink}>
                  <a href={project.link} target="blank">
                    Have a look!
                  </a>
                </div>
              )}
            </div>
            <div className={s.right}>
              <a href={project.link} target="blank">
                <img src={project.imageUrl} alt={project.altTxt} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
