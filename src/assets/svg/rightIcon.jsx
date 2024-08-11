import React from "react";
import LeftIcon from "./leftIcon";

const RightIcon = () => {
  return (
    <>
      <div style={{transform: 'rotate(180deg)'}}>
        <LeftIcon />
      </div>
    </>
  );
};

export default RightIcon;
