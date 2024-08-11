import React from "react";

const LogoCircle = (props) => {
  const { logoClassName, height, width } = props;
  return (
    <div className={logoClassName}>
      <svg
        preserveAspectRatio="none"
        data-bbox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 200 200"
        role="img"
        aria-label="Homepage"
        vectorEffect='non-scaling-stroke'
      >
        <g>
          <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
        </g>
      </svg>
    </div>
  );
};

export default LogoCircle;