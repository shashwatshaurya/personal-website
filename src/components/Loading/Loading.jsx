import React from "react";
import s from "./style.module.scss";

const Loading = () => {
  return (
    <div className={s.container}>
      {/* <svg className={s.centerBox} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg> */}

      {/* <svg className={s.centerBox} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="none" d="M0 0h200v200H0z"></path><path fill="none" stroke-linecap="round" stroke="#FF156D" stroke-width="15" transform-origin="center" d="M70 95.5V112m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5L92 57.3M33.6 91 48 82.7m0-25.5L33.6 49m58.5 33.8 14.3 8.2"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;-120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path><path fill="none" stroke-linecap="round" stroke="#FF156D" stroke-width="15" transform-origin="center" d="M130 155.5V172m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5-14.3 8.3M93.6 151l14.3-8.3m0-25.4L93.6 109m58.5 33.8 14.3 8.2"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg> */}

      <svg className={s.centerBox} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle
          fill="none"
          strokeOpacity="1"
          stroke="#080546"
          strokeWidth=".5"
          cx="100"
          cy="100"
          r="0"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            dur="2.8"
            values="1;80"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="stroke-width"
            calcMode="spline"
            dur="2.8"
            values="0;25"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="stroke-opacity"
            calcMode="spline"
            dur="2.8"
            values="1;0"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
