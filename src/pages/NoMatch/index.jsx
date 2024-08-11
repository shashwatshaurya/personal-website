import React from 'react';
import s from './style.module.scss';

const NoMatch = () => {
    return (
        <div className={s.underConstruction}>
            You've landed on an invalid Route!!!
            Use Nav Elements to navigate the page
        </div>
    );
};

export default NoMatch;