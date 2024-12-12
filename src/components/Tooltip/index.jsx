import React, { useState, useRef, useEffect } from "react";
import s from './style.module.scss';

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  const handleMouseOver = () => setIsVisible(true);
  const handleMouseOut = () => setIsVisible(false);

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      target.addEventListener("mouseover", handleMouseOver);
      target.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (target) {
        target.removeEventListener("mouseover", handleMouseOver);
        target.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <div
      ref={targetRef}
      className={s.targetWrapper}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={s.toolTip}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
