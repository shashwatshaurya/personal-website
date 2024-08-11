import React from "react";
import { Link } from "react-router-dom";
import TextArea from "../../components/TextArea";
import Hobbies from "./hobbies";
import { languages, qualities } from "./constants";
import { sleep } from "../../common/utils";
import { EMAIL } from "../../common/constants";
import s from "./style.module.scss";
import Button from "../../components/Button";

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
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
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
          <blockquote>"सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |<br/>
          अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुच: ||"</blockquote>
          <div className={s.author}>-BG:CH18:V66, Shree Krishna</div>
        </div>
      </div>
    </>
  );
};

export default Home;
