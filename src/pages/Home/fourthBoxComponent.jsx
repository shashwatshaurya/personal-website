import React, { memo } from "react";
import Button from "components/Button";
import TextArea from "components/TextArea";
import { EMAIL } from "common/constants";
import s from "./style.module.scss";

const FourthBoxComponent = () => {
  const [body, setBody] = React.useState("");
  const [quote, setQuote] = React.useState({ q: "", a: "" });

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

  return (
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
            name="dayMessage"
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
  );
};

export default memo(FourthBoxComponent);
