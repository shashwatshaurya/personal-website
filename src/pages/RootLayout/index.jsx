import React from 'react';
import cx from 'classnames';
import { Link, Outlet } from 'react-router-dom';
import s from './style.module.scss'; // scss file needs to be like name.module.scss and should not be like import * from s

const RootLayout = () => {
    return (
        <div className={s.pageWrapper}>
            <div className={s.nav}>
                <div className={s.navElements}>
                    <div className={s.leftElements}>
                        <div className={cx(s.nameLogo, s.navElement)}>
                            <Link to='/'>Shashwat Shaurya</Link>
                        </div>
                    </div>
                    <div className={s.rightElements}>
                        <div className={s.navElement}>
                            <Link to="/">Home</Link>
                        </div>
                        <div className={s.navElement}>
                            <Link to="/projects">Projects</Link>
                        </div>
                        <div className={s.navElement}>
                            <Link to="/blog">Blog</Link>
                        </div>
                        <div className={s.navElement}>
                            <Link to="/connect">Connect</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
            <div className={s.footer}>By Shashwat with <span className={s.heart}>&#10084;</span></div>
        </div>
    );
};

export default RootLayout;