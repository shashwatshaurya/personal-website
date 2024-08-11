import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      // You can log the error to an error reporting service
      console.error('Error Boundary caught an error:', error, errorInfo);
      setHasError(true);
    };

    // Attach the error handler to the window object
    window.addEventListener('error', handleError);

    return () => {
      // Cleanup: remove the error handler when the component unmounts
      window.removeEventListener('error', handleError);
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  if (hasError) {
    // Render any custom fallback UI here
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
