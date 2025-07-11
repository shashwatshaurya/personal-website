import React from "react";
import { Link } from "react-router-dom";
import { EMAIL, LINKEDIN, GITHUB, TWITTER } from "common/constants";
import LinkedInIcon from "assets/svg/linkedInIcon";
import GithubIcon from "assets/svg/githubIcon.svg";
import TwitterIcon from "assets/svg/twitterIcon";
import s from "./style.module.scss";

const Footer = () => {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footerNav}>
          <div className={s.footerHeading}>Site Map</div>
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}resume`}>Resume</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}projects`}>Projects</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}blog`}>Blog</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}connect`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={s.footerEmail}>
          <div className={s.footerHeading}>Email</div>
          {EMAIL}
        </div>
        <div>
          <div className={s.footerHeading}>Socials</div>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={s.socialLink}>
            <LinkedInIcon />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={s.socialLink}>
            <GithubIcon />
          </a>
          <a href={TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={s.socialLink}>
            <TwitterIcon />
          </a>
        </div>
        <div className={s.copyRight}>
          &copy; 2024 by Shashwat with<span className={s.heart}>&#10084;</span>{" "}
          <br />
          Idea from Nicol Rider.
        </div>
      </div >
    </>
  );
};

export default Footer;
