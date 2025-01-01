import React from "react";
import { Link } from "react-router-dom";
import TextArea from "components/TextArea";
import Hobbies from "./hobbies";
import { languages, qualities } from "./constants";
import { sleep } from "common/utils";
import { EMAIL } from "common/constants";
import s from "./style.module.scss";
import Button from "components/Button";
import ReactLogo from "assets/svg/reactIcon.svg";
import NodeJSLogo from "assets/svg/nodejsIcon.svg";
import VueJSIcon from "assets/svg/vueJsIcon.svg";
import MongoDBLogo from "assets/svg/mongodbLogo.svg";
import MySQLLogo from "assets/svg/mysqlLogo.svg";
import WebpackLogo from "assets/svg/webpackLogo.svg";
import AWSS3Logo from "assets/svg/awsS3Logo.svg";
import DockerLogo from "assets/svg/dockerLogo.svg";
import ExpressJSLogo from "assets/svg/expressJSLogo.svg";
import Tooltip from "components/Tooltip";

const Home = () => {
  const [greetText, setGreetText] = React.useState("");
  const [qualityText, setQualityText] = React.useState("");
  const [intersectingElem, setIntersectingElem] = React.useState("first");
  const [body, setBody] = React.useState("");
  const [quote, setQuote] = React.useState({ q: "", a: "" });
  // const constant = React.useRef(true);
  const onFirst = React.useRef(false);
  const onSecond = React.useRef(false);
  const firstBoxRef = React.useRef(null);
  const secondBoxRef = React.useRef(null);

  React.useEffect(() => {
    fetch("https://zenquotes.io/api/today", { mode: "no-cors", method: "GET" })
      .then((resp) => resp.json())
      .then((jsonResp) => {
        setQuote({
          a: jsonResp?.a || "Tsun Tzu",
          q: jsonResp?.q || "Random Quote",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    if (intersectingElem) {
      switch (intersectingElem) {
        case "first":
          if (onFirst.current === false) greetThemAll();
          break;
        case "second":
          if (onSecond.current === false) showThemQualities();
          break;
        default:
          break;
      }
    }
  }, [intersectingElem]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry, entry.target.id);
            setIntersectingElem(entry.target.id);
          }
          return;
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    if (firstBoxRef.current) observer.observe(firstBoxRef.current);

    if (secondBoxRef.current) observer.observe(secondBoxRef.current);

    return () => {
      if (firstBoxRef.current) observer.unobserve(firstBoxRef.current);

      if (secondBoxRef.current) observer.unobserve(secondBoxRef.current);
    };
  }, [firstBoxRef, secondBoxRef]);

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

  const showThemQualities = React.useCallback(async () => {
    onSecond.current = true;
    for (let quality of qualities) {
      setQualityText(quality);
      await sleep(1000);
    }
    onSecond.current = false;
  }, []);

  return (
    <>
      <div className={s.first} id="first" ref={firstBoxRef}>
        <div className={s.myImageWrapper}>
          <img src="./images/myImg.jpg"></img>
        </div>
        <div className={s.aboutMeWrapper}>
          <div className={s.greetText}>{greetText}</div>
          <div className={s.introText}>
            <div>A Bit About Me</div>
            <p>
              I'm a software developer with a knack to learn; someone who
              understands code well. Been in the business for past 3 years and
              still continuing. Would love to develop new products and grow
              together.
            </p>
          </div>
          <div className={s.techStacks}>
            <Tooltip content="ReactJS"><ReactLogo height="23" width="23" /></Tooltip>
            <Tooltip content="NodeJS"><NodeJSLogo height="23" width="23" /></Tooltip>
            <Tooltip content="VueJS"><VueJSIcon height="23" width="23" /></Tooltip>
            <Tooltip content="MongoDb"><MongoDBLogo height="23" width="23" /></Tooltip>
            <Tooltip content="MySQL"><MySQLLogo height="23" width="23" /></Tooltip>
            <Tooltip content="Webpack"><WebpackLogo height="23" width="23" /></Tooltip>
            <Tooltip content="S3"><AWSS3Logo height="23" width="23" /></Tooltip>
            <Tooltip content="Docker"><DockerLogo height="23" width="23" /></Tooltip>
            <Tooltip content="Express"><ExpressJSLogo height="23" width="23" /></Tooltip>
          </div>
          <div className={s.navButtons}>
            <ul>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {/* <li><Link to='/connect'>Contact</Link></li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className={s.second} id="second" ref={secondBoxRef}>
        <div className={s.nameIntro}>Shashwat this side.👋</div>
        <div className={s.descText}>I'm {qualityText}.</div>
      </div>
      <div className={s.third} id="third">
        <div>
          <Hobbies />
        </div>
      </div>
      <div className={s.fourth} id="fourth">
        <div className={s.leftContent}>
          <div>HOW WAS YOUR DAY?</div>
          <form
            className={s.form}
            action={`mailto:${EMAIL}?body=${body}`}
            method="GET"
          >
            <TextArea
              placeholder="I hope it was great!&#13;If not, feel free to connect if I can be of any help.&#13;If you have a good story to share about today, you must.&#13;&#13;The stage is all yours!"
              onChange={(e) => setBody(e.target.value)}
            />
            <Button type="email" normal>
              Send
            </Button>
          </form>
        </div>
        <div className={s.rightContent}>
          <blockquote>
            "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |<br />
            अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुच: ||"
          </blockquote>
          <div className={s.author}>-BG:CH18:V66, Shree Krishna</div>
        </div>
      </div>
    </>
  );
};

export default Home;
