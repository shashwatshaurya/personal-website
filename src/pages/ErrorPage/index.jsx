import React from 'react';
import { useRouteError } from 'react-router-dom';
import s from './style.module.scss';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className={s.underConstruction}>
            Error Page
            {error.statusText || error.message}
        </div>
    );
};

export default ErrorPage;