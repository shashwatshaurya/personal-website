import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import s from './style.module.scss'; // scss file needs to be like name.module.scss and should not be like import * from s

const RootLayout = () => {
    return (
        <div className={s.pageWrapper}>
            <div className={s.nav}>
                <ul className={s.navElements}>
                    <li className={s.navElement}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={s.navElement}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={s.navElement}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={s.navElement}>
                        <Link to="/connect">Connect</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
            <div className={s.footer}>By Shashwat with <span className={s.heart}>&#10084;</span></div>
        </div>
    );
};

export default RootLayout;