import React from "react";
import cx from "classnames";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/Logo";
import Footer from '../../components/Footer';
import s from "./style.module.scss"; // scss file needs to be like name.module.scss and should not be like import * from s

const RootLayout = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.nav}>
        <div className={s.navElements}>
          <div className={s.leftElements}>
            <div className={s.navElement}>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className={s.rightElements}>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to="/resume">Resume</Link>
            </div>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to="/projects">Projects</Link>
            </div>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to="/blog">Blog</Link>
            </div>
            <div className={cx(s.navElement, s.actualNav)}>
              <Link to="/connect">Connect</Link>
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
