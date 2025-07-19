import React, { memo, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LazyImage from "components/LazyImage";
import Tooltip from "components/Tooltip";
import ReactLogo from "assets/svg/reactIcon.svg";
import NodeJSLogo from "assets/svg/nodejsIcon.svg";
import VueJSIcon from "assets/svg/vueJsIcon.svg";
import MongoDBLogo from "assets/svg/mongodbLogo.svg";
import MySQLLogo from "assets/svg/mysqlLogo.svg";
import WebpackLogo from "assets/svg/webpackLogo.svg";
import AWSS3Logo from "assets/svg/awsS3Logo.svg";
import DockerLogo from "assets/svg/dockerLogo.svg";
import ExpressJSLogo from "assets/svg/expressJSLogo.svg";
import useOnScreen from "../../hooks/useOnScreen.jsx";
import { sleep } from "common/utils";
import { languages } from "./constants";
import * as blurhashConstants from "common/blurhashConstants";
import s from "./style.module.scss";

const FirstBoxComponent = () => {
  const [greetText, setGreetText] = useState("");
  const onFirst = useRef(false);
  const firstBoxRef = useRef(null);
  const isVisible = useOnScreen(firstBoxRef);

  useEffect(() => {
    if (isVisible && !onFirst.current) {
      greetThemAll();
    }
  }, [isVisible]);

  const greetThemAll = React.useCallback(async () => {
    onFirst.current = true;
    for (let lang of languages) {
      let str = "";
      for (let i = 0; i < lang.length; i++) {
        str += lang[i];
        setGreetText(str);
        await sleep(200);
      }
      await sleep(500);
    }
    onFirst.current = false;
  }, []);

  return (
    <div className={s.first} id="first" ref={firstBoxRef}>
      <LazyImage
        appliedClass={s.myImageWrapper}
        src={`${process.env.PUBLIC_PATH ?? '/'}images/myImg.jpg`}
        alt="Shashwat"
        blurhash={blurhashConstants["myImg.jpg"]}
        cHeight="34rem"
        cWidth="34rem"
      />
      <div className={s.aboutMeWrapper}>
        <div className={s.greetText}>{greetText}</div>
        <div className={s.introText}>
          <div>Hi, I'm Shashwat</div>
          <p>
            I'm a software developer who loves building clean, reliable, and scalable applications.
            With 4+ years of experience, I enjoy turning ideas into real-world products.
            I'm always up for learning new technologies, solving meaningful problems,
            and collaborating with teams that value growth and good code.
            <br />
            <span className={s.highlight}>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}connect`}>Let's build something great together!</Link>
            </span>
          </p>
        </div>
        <div className={s.techStacks}>
          <Tooltip content="ReactJS">
            <ReactLogo height="23" width="23" />
          </Tooltip>
          <Tooltip content="NodeJS">
            <NodeJSLogo height="23" width="23" />
          </Tooltip>
          <Tooltip content="VueJS">
            <VueJSIcon height="23" width="23" />
          </Tooltip>
          <Tooltip content="MongoDb">
            <MongoDBLogo height="23" width="23" />
          </Tooltip>
          <Tooltip content="MySQL">
            <MySQLLogo height="23" width="23" />
          </Tooltip>
          <Tooltip content="Webpack">
            <WebpackLogo height="23" width="23" />
          </Tooltip>
          <Tooltip content="S3">
            <AWSS3Logo height="23" width="23" />
          </Tooltip>
          <Tooltip content="Docker">
            <DockerLogo height="23" width="23" />
          </Tooltip>
          <Tooltip content="Express">
            <ExpressJSLogo height="23" width="23" />
          </Tooltip>
        </div>
        <div className={s.navButtons}>
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}resume`} data-umami-event="resume-link-home">Resume</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}projects`} data-umami-event="projects-link-home">Projects</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}blog`} data-umami-event="blog-link-home">Blog</Link>
            </li>
            {/* <li><Link to='/connect'>Contact</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(FirstBoxComponent);
