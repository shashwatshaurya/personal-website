import React, { memo } from "react";
import Button from "components/Button";
import TextArea from "components/TextArea";
import { EMAIL } from "common/constants";
import s from "./style.module.scss";

const FourthBoxComponent = () => {
  const [body, setBody] = React.useState("");
  const [quote, setQuote] = React.useState({ q: "", a: "" });

  React.useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Using CORS proxy to avoid CORS issues
        const resp = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/today"));
        const data = await resp.json();
        const jsonResp = JSON.parse(data.contents);
        setQuote({
          a: jsonResp?.[0]?.a || "Sun Tzu",
          q: jsonResp?.[0]?.q || "The supreme excellence is to subdue the enemy without fighting.",
        });
      } catch (error) {
        console.error("Failed to fetch quote:", error);
        // Fallback to default quote
        setQuote({
          a: "Sun Tzu",
          q: "The supreme excellence is to subdue the enemy without fighting.",
        });
      }
    };
    fetchQuote();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body) {
      const mailtoLink = `mailto:${EMAIL}?subject=About My Day&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className={s.fourth} id="fourth">
      <div className={s.leftContent}>
        <div>HOW WAS YOUR DAY?</div>
        <form
          className={s.form}
          action="#"
          method="POST"
          autoComplete="off"
          noValidate={false}
          onSubmit={handleSubmit}
        >
          <TextArea
            placeholder="I hope it was great!&#13;If not, feel free to connect if I can be of any help.&#13;If you have a good story to share about today, you must.&#13;&#13;The stage is all yours!"
            onChange={(e) => setBody(e.target.value)}
            name="dayMessage"
            autoComplete="off"
            required
          />
          <Button type="email" normal>
            Send
          </Button>
        </form>
      </div>
      <div className={s.rightContent}>
        <blockquote>
          "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |"<br />
          "अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुच: ||"
        </blockquote>
        <div className={s.author}>-BG:CH18:V66, Shree Krishna</div>
      </div>
    </div>
  );
};

export default memo(FourthBoxComponent);
