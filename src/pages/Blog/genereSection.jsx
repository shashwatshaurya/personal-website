import React from "react";
import Card from "./card";
import { GENRES, blogs } from "./constants";
import s from "./style.module.scss";

const GenereSection = (props) => {
  const { genere } = props;

  const findBlogsWithGeneres = (genere) => {
    return blogs.filter((blog) => blog.genre === GENRES[genere]);
  };

  const blogsWithGenre = findBlogsWithGeneres(genere);

  if (blogsWithGenre.length === 0) return <></>;

  return (
    <div className={s.genereWrapper}>
      <div className={s.genereHeading}>{GENRES[genere]}</div>
      <hr className={s.rule}/>
      <div className={s.genereCardsWrapper}>
        {blogsWithGenre.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GenereSection;
