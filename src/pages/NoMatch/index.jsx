import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./style.module.scss";
import Button from "components/Button";

const NoMatch = () => {
  useEffect(() => {
    umami.trackEvent("no-match-page-visited");
  }, []);
  return (
    <div className={s.noMatchPageWrapper}>
      <div className={s.contentWrapper}>
        <img src={`${process.env.PUBLIC_PATH ?? '/'}images/404png.png`} className={s.noRouteImg} />
        <br />
        You've landed on an invalid Route!!! <br />
        Use Nav Elements to navigate, OR <br />
        <Button type="email" buttonClass={s.goToHome} normal>
          <Link style={{ backgroundColor: 'rgba(0,0,0,0)', color: "black" }} to="/">Go To Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NoMatch;
