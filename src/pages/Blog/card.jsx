import React from "react";
import s from "./style.module.scss";

const Card = ({ item }) => {
  const { blogImage, name, blogUrl, desc } = item;

  return (
    <div className={s.cardWrapper} onClick={() => window.open(blogUrl, "_blank")}>
      <div className={s.imgWrapper}>
        <img src={blogImage} alt={name} />
      </div>
      <div className={s.infoWrapper}>
        <div className={s.name}>{name}</div>
        <div className={s.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default Card;
