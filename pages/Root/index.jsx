import React from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
    return (
        <div className={"pageWrapper"}>
            <div className={"nav"}>
                <ul className={"navElements"}>
                    <li className={"navElement"}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className={"navElement"}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={"navElement"}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={"navElement"}>
                        <Link to="/connect">Connect</Link>
                    </li>
                </ul>
            </div>
            <div className={"underConstruction"}>Site Under Construction</div>
            <div className={"footer"}>By Shashwat with <span className={"heart"}>&#10084;</span></div>
        </div>
    );
};

export default Root;