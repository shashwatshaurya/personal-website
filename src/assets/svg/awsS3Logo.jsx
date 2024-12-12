import React from "react";

const AWSS3Logo = (props) => {
  const { height = 16, width = 16 } = props;
  return (
    <div>
      <svg
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlns-xlink="http://www.w3.org/1999/xlink"
        aria-label="Amazon Simple Storage Service"
        role="img"
        viewBox="0 0 512 512"
        // fill="#000000"
      >
        <title>S3</title>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect width="512" height="512" rx="15%" fill="#f3f3f3"></rect>{" "}
          <path fill="#e05243" d="M260 348l-137 33V131l137 32z"></path>{" "}
          <path fill="#8c3123" d="M256 349l133 32V131l-133 32v186"></path>{" "}
          <g fill="#e05243">
            {" "}
            <path
              id="a"
              d="M256 64v97l58 14V93zm133 67v250l26-13V143zm-133 77v97l58-8v-82zm58 129l-58 14v97l58-29z"
            ></path>{" "}
          </g>{" "}
          <use
            fill="#8c3123"
            transform="rotate(180 256 256)"
          ></use>{" "}
          <path fill="#5e1f18" d="M314 175l-58 11-58-11 58-15 58 15"></path>{" "}
          <path fill="#f2b0a9" d="M314 337l-58-11-58 11 58 16 58-16"></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default AWSS3Logo;
