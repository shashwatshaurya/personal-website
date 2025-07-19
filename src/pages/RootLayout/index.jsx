import React from "react";
import cx from "classnames";
import { Link, Outlet } from "react-router-dom";
import Logo from "components/Logo";
import Footer from "components/Footer";
import s from "./style.module.scss"; // scss file needs to be like name.module.scss and should not be like import * from s

const RootLayout = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.nav}>
        <div className={s.navElements}>
          <div className={s.leftElements}>
            <div className={s.navElement}>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}`}>
                <Logo />
              </Link>
            </div>
          </div>
          <div className={s.rightElements}>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}`} data-umami-event="home-link">Home</Link>
            </div>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}resume`} data-umami-event="resume-link">Resume</Link>
            </div>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}projects`} data-umami-event="projects-link">Projects</Link>
            </div>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}blog`} data-umami-event="blog-link">Blog</Link>
            </div>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to={`${process.env.PUBLIC_PATH ?? '/'}connect`} data-umami-event="connect-link">Connect</Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
