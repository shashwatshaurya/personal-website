import React, { memo } from "react";
import s from "./style.module.scss";

const HobbyCard = (props) => {
  const { imgUrl, imgText } = props;

  return (
    <div className={s.hobbyWrapper}>
      <div className={s.imgWrapper}><img src={imgUrl} className={s.hobbyImg} /></div>
      <div className={s.hobbyText}>{imgText}</div>
    </div>
  );
};

export default memo(HobbyCard);
