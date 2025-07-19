import React from "react";
import EmailForm from "./emailForm";
import LinkedInIcon from "assets/svg/linkedInIcon";
import GithubIcon from "assets/svg/githubIcon.svg";
import TwitterIcon from "assets/svg/twitterIcon";
import { LINKEDIN, GITHUB, TWITTER } from "common/constants";
import s from "./style.module.scss";

const Connect = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.left}>
        {/* <div>Socials</div> */}
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-umami-event="linkedin-link-connect">
          <i className={s.socialIcon}>
            <LinkedInIcon height={80} width={80} />
          </i>
        </a>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-umami-event="github-link-connect">
          <i className={s.socialIcon}>
            <GithubIcon height={80} width={80} />
          </i>
        </a>
        <a href={TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-umami-event="twitter-link-connect">
          <i className={s.socialIcon}>
            <TwitterIcon height={80} width={80} />
          </i>
        </a>
      </div>
      <div className={s.right}>
        <div className={s.headerText} >Contact</div>
        <div className={s.headerGreeting} >Looking forward to hearing from you</div>
        <div className={s.contactInfo} >+917992394279 | shashwatshaurya.98+pw@gmail.com</div>
        <EmailForm />
      </div>
    </div>
  );
};

export default Connect;
