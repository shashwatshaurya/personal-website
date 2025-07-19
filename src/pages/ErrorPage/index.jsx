import React, { useState, useEffect } from "react";
import Button from "components/Button";
import s from './style.module.scss';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error) => {
    // You can log the error to an error reporting service
    console.error("Error Boundary caught an error:", error.error.stack);
    umami.trackEvent("error-boundary-caught-error", { error: error.error.stack });
    if (error?.error?.stack) setHasError(true);
    else setHasError(false);
  };

  useEffect(() => {
    // Attach the error handler to the window object
    window.addEventListener("error", handleError);

    return () => {
      // Cleanup: remove the error handler when the component unmounts
      window.removeEventListener("error", handleError);
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  if (hasError) {
    // Render any custom fallback UI here
    return (
      <div className={s.underConstruction}>
        <img src={`${process.env.PUBLIC_PATH ?? '/'}images/wetfloor.webp`} alt="Man Slipping on wet floor" />
        <h1>OOPS!!! Looks like something went wrong.</h1>
        <Button type="email" buttonClass={s.goToHome} normal>
          <a
            onClick={() => location.href = '/'}
            style={{ backgroundColor: "rgba(0,0,0,0)", color: "black" }}
          >
            Go To Home
          </a>
        </Button>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
